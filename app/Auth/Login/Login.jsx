import Link from "next/link";
import Image from "next/image";
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
import loginImg from "../../assets/imagesource/login_img.png";
import RegisterStepOne from "../Register/RegisterStepOne";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../../Reducer/AuthSlice";
import { useRouter } from "next/navigation";

const Login = ({
  openLoginModal,
  setOpenLoginModal,
  openRegisterStepOneModal,
  setOpenRegisterStepOneModal,
}) => {
  const [openRegisterStepTwoModal, setOpenRegisterStepTwoModal] =
    useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const [errMsg, setErrMsg] = useState();
  const router = useRouter();
  const onSubmit = (data) => {
    dispatch(login(data)).then((res) => {
      console.log("resLogin", res);
      if (res?.payload?.status_code === 200) {
        setOpenLoginModal(false);
        router.push("/dashboard");
      } else if (res?.payload?.response?.data?.status_code) {
        setErrMsg(res?.payload?.response?.data?.message);
      }
    });
  };
  return (
    <>
      <Modal
        size="6xl"
        show={openLoginModal}
        onClose={() => setOpenLoginModal(false)}
      >
        <ModalHeader className="border-none pb-0 absolute right-10 top-12 bg-transparent">
          &nbsp;
        </ModalHeader>
        <ModalBody className="bg-white p-0">
          <div className="flex">
            <div className="w-6/12 flex justify-center items-center">
              <div className="py-10 px-20">
                <h2 className="text-[#000000] text-[30px] leading-[35px] font-semibold pb-4">
                  Login at C4Chess
                </h2>
                <p className="text-[#9D9898] text-sm pb-4">
                  Access your dashboard to manage cases, view reports, and stay
                  connected — securely and efficiently.
                </p>
                <div className="form_area">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex max-w-md flex-col gap-0"
                  >
                    <div className="mb-2">
                      <div className="mb-1 block">
                        <Label htmlFor="email1">Your Email or Username</Label>
                      </div>
                      <TextInput
                        id="email1"
                        type="text"
                        placeholder="Email or Username"
                        {...register("username", { required: true })}
                      />
                      {errors.username && (
                        <span className="text-red-500">
                          Username is required
                        </span>
                      )}
                    </div>
                    <div className="mb-2">
                      <div className="mb-1 block">
                        <Label htmlFor="password1">Enter your Password</Label>
                      </div>
                      <TextInput
                        id="password1"
                        type="password"
                        placeholder="password"
                        {...register("password", { required: true })}
                      />
                      {errors.password && (
                        <span className="text-red-500">
                          Password is required
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between gap-0 mb-8">
                      <div className="flex gap-1 items-center">
                        <Checkbox id="remember" />
                        <p
                          htmlFor="remember"
                          className="text-[#8E8E8E] text-sm"
                        >
                          Remember me
                        </p>
                      </div>
                      <div>
                        <Link
                          className="text-[#8E8E8E] text-sm"
                          href=""
                          passHref
                        >
                          Forgot Passowrd ?
                        </Link>
                      </div>
                    </div>
                    <Button type="submit">Submit</Button>
                  </form>
                </div>
                {errMsg && (
                  <>
                    <div className="text-center text-red-600 mt-2">
                      {errMsg}
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="w-6/12">
              <Image src={loginImg} alt="loginImg" />
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};
export default Login;
