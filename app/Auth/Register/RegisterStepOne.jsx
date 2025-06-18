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
import registerStepone from "../../assets/imagesource/register_stepone.png";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerUserStepOne } from "../../Reducer/AuthSlice";
import { useState } from "react";

const RegisterStepOne = ({
  openRegisterStepOneModal,
  setOpenRegisterStepOneModal,
  openRegisterStepTwoModal,
  setOpenRegisterStepTwoModal,
  finalRegisterHandler,
  setUserRegId,
}) => {
  const dispatch = useDispatch();
  const [errMsg, setErrMsg] = useState();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch("password");
  const onSubmit = (data) => {
    dispatch(registerUserStepOne({ ...data, parent_id: 0 })).then((res) => {
      console.log("Res", res);
      if (res?.payload?.status_code === 200) {
        setUserRegId(res?.payload?.user?.id);
        finalRegisterHandler();
      } else if (res?.payload?.response?.data?.status_code === 422) {
        setErrMsg(res?.payload?.response?.data?.errors);
      }
    });
  };
  return (
    <>
      <Modal
        size="6xl"
        show={openRegisterStepOneModal}
        onClose={() => setOpenRegisterStepOneModal(false)}
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
                    <div className="flex gap-4">
                      <div className="w-full mb-2">
                        <div className="mb-1 block">
                          <Label>First Name</Label>
                        </div>
                        <TextInput
                          type="text"
                          placeholder="Enter First Name"
                          {...register("first_name", { required: true })}
                        />
                        {errors.first_name && (
                          <span className="text-red-500">
                            First Name is required
                          </span>
                        )}
                      </div>
                      <div className="w-full mb-2">
                        <div className="mb-1 block">
                          <Label>Last Name</Label>
                        </div>
                        <TextInput
                          type="text"
                          placeholder="Enter Last Name"
                          {...register("last_name", { required: true })}
                        />
                        {errors.last_name && (
                          <span className="text-red-500">
                            Last Name is required
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="mb-2">
                      <div className="mb-1 block">
                        <Label>Email Address</Label>
                      </div>
                      <TextInput
                        type="email"
                        placeholder="Enter your Email Id"
                        {...register("email", { required: true })}
                      />
                      {errors.email && (
                        <span className="text-red-500">Email is required</span>
                      )}
                    </div>
                    <div className="mb-2">
                      <div className="mb-1 block">
                        <Label>Username</Label>
                      </div>
                      <TextInput
                        type="text"
                        placeholder="Enter your Username"
                        {...register("username", { required: true })}
                      />
                      {errors.username && (
                        <span className="text-red-500">
                          User Name is required
                        </span>
                      )}
                    </div>
                    <div className="mb-2">
                      <div className="mb-1 block">
                        <Label>Enter your Password</Label>
                      </div>
                      <TextInput
                        type="password"
                        placeholder="Type your password"
                        {...register("password", { required: true })}
                      />
                      {errors.password && (
                        <span className="text-red-500">
                          Password is required
                        </span>
                      )}
                    </div>
                    <div className="mb-2">
                      <div className="mb-1 block">
                        <Label>Confirm your Password</Label>
                      </div>
                      <TextInput
                        type="password"
                        placeholder="Type your password"
                        {...register("confirm_password", {
                          required: "Confirm Password is required",
                          validate: (value) =>
                            value === password || "Password do not Match",
                        })}
                      />
                      {errors.confirm_password && (
                        <span className="text-red-500">
                          {errors.confirm_password.message}
                        </span>
                      )}
                    </div>
                    <Button
                      //   onClick={finalRegisterHandler}
                      type="submit"
                      className="mt-2"
                    >
                      Next Step
                    </Button>
                  </form>
                </div>
                {errMsg && (
                  <>
                    <div className="mt-2 text-center text-red-600">
                      {errMsg?.email}
                    </div>
                    {/* {errMsg?.username && (
                      <div className="text-center text-red-600">or</div>
                    )} */}
                    <div className="text-center text-red-600">
                      {errMsg?.username}
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="w-6/12">
              <Image src={registerStepone} alt="registerStepone" />
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};
export default RegisterStepOne;
