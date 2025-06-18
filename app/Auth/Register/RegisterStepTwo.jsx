import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Checkbox,
  Label,
  TextInput,
  Select,
} from "flowbite-react";
import Image from "next/image";
import registerSteptwo from "../../assets/imagesource/register_steptwo.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountry,
  getState,
  registerUserStepTwo,
} from "../../Reducer/AuthSlice";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
const RegisterStepTwo = ({
  openRegisterStepTwoModal,
  setOpenRegisterStepTwoModal,
  userRegid,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  const [selectedCountry, setSelectedCountry] = useState("");
  const [stateList, setStateList] = useState([]);
  const { countryList, stateLists } = useSelector((state) => state?.auth);
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountry());
  }, []);
  console.log("countryList", countryList);
  useEffect(() => {
    if (selectedCountry) {
      dispatch(getState(selectedCountry)).then((res) => {
        if (res?.payload?.status_code === 200) {
          setStateList(res?.payload?.state);
        } else {
          setStateList([]);
        }
      });
    }
  }, [selectedCountry]);
  const onSubmit = (data) => {
    dispatch(
      registerUserStepTwo({
        ...data,
        user_id: userRegid,
        lat: "22.5726",
        longitude: "88.3639",
        state_id: 0,
      })
    ).then((res) => {
      console.log("Res", res);
      if (res?.payload?.status_code === 201) {
        router.push("/dashboard");
        setOpenRegisterStepTwoModal(false);
      }
    });
  };

  return (
    <>
      <Modal
        size="6xl"
        show={openRegisterStepTwoModal}
        onClose={() => setOpenRegisterStepTwoModal(false)}
      >
        <ModalHeader className="border-none pb-0 absolute right-10 top-12 bg-transparent">
          &nbsp;
        </ModalHeader>
        <ModalBody className="bg-white p-0">
          <div className="flex">
            <div className="w-6/12 flex justify-center items-center">
              <div className="py-10 px-20">
                <h2 className="text-[#000000] text-[30px] leading-[35px] font-semibold pb-4">
                  Register with C4Chess
                </h2>
                <p className="text-[#9D9898] text-sm pb-4">
                  Sign up to unlock expert-led chess lessons, track your
                  progress, and elevate your game — one move at a time.
                </p>
                <div className="form_area">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex max-w-md flex-col gap-0"
                  >
                    <div className="mb-2">
                      <div className="mb-1 block">
                        <Label>Mobile Number</Label>
                      </div>
                      <TextInput
                        type="text"
                        placeholder="Enter  your Mobile Number"
                        {...register("mobile", { required: true })}
                      />
                      {errors.mobile && (
                        <span className="text-red-500">
                          {errors.mobile.type}
                        </span>
                      )}
                    </div>
                    <div className="mb-2">
                      <div className="mb-1 block">
                        <Label>Country</Label>
                      </div>
                      <Select
                        id="countries"
                        {...register("country_id", { required: true })}
                        onChange={(e) => {
                          const selectedId = e.target.value;
                          setSelectedCountry(selectedId);
                          setValue("country_id", selectedId);
                        }}
                      >
                        <option>Choose Your Country</option>
                        {countryList?.country?.map((coun) => {
                          return (
                            <>
                              <option key={coun?.id} value={coun?.id}>
                                {coun?.countryName}
                              </option>
                            </>
                          );
                        })}
                      </Select>
                      {errors.country_id && (
                        <span className="text-red-500">
                          {errors.country_id.type}
                        </span>
                      )}
                    </div>
                    <div className="flex gap-4">
                      <div className="w-full mb-2">
                        <div className="mb-1 block">
                          <Label>State</Label>
                        </div>
                        <Select
                          id="countries"
                          // {...register("state_id", { required: true })}
                          disabled={!selectedCountry}
                        >
                          <option>Choose Your State</option>
                          {stateList?.map((statesData) => {
                            return (
                              <>
                                <option key={statesData?.id}>
                                  {statesData?.stateName}
                                </option>
                              </>
                            );
                          })}
                        </Select>
                        {errors.state_id && (
                          <span className="text-red-500">
                            {errors.state_id.type}
                          </span>
                        )}
                      </div>
                      <div className="w-full mb-2">
                        <div className="mb-1 block">
                          <Label>Zip code</Label>
                        </div>
                        <TextInput
                          id="email1"
                          type="text"
                          placeholder="Enter Zip code"
                          {...register("zip", { required: true })}
                        />
                        {errors.zip && (
                          <span className="text-red-500">
                            {errors.zip.type}
                          </span>
                        )}
                        {console.log("ere", errors)}
                      </div>
                    </div>
                    <div className="mb-2">
                      <div className="mb-1 block">
                        <Label>Address</Label>
                      </div>
                      <TextInput
                        type="text"
                        placeholder="Enter Your Address"
                        {...register("first_line", { required: true })}
                      />
                      {errors.first_line && (
                        <span className="text-red-500">
                          {errors.first_line.type}
                        </span>
                      )}
                    </div>
                    <Button type="submit" className="mt-2">
                      Register
                    </Button>
                  </form>
                </div>
              </div>
            </div>
            <div className="w-6/12">
              <Image src={registerSteptwo} alt="registerSteptwo" />
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};
export default RegisterStepTwo;
