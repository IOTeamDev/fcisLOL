"use client";
import { useForm } from "react-hook-form";
import handleRegister from "./handleregister";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const RegisterForm = () => {
  const { register, handleSubmit } = useForm();
  const route = useRouter();

  const submit = async (data: any) => {
    try {
      const user = await handleRegister(data);
      toast.success("Your account has been registered successfully");
      setTimeout(() => route.push("/login"), 1200);
    } catch (err) {
      throw err;
    }
  };

  return (
    <div className="mx-auto max-w-sm space-y-6">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Input
              id="name"
              placeholder="First Name"
              {...register("name")}
              required
              type="text"
            />
          </div>
          <div className="space-y-2">
            <Input
              id="lastName"
              placeholder="Last Name"
              {...register("lastName")}
              required
              type="text"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Input
            id="email"
            placeholder="Email"
            {...register("email")}
            required
            type="text"
          />
        </div>
        <div className="space-y-2">
          <Input
            id="password"
            placeholder="Password"
            {...register("password")}
            required
            type="password"
          />{" "}
        </div>
        <div className="space-y-2">
          <Input
            id="repassword"
            placeholder="Confirm Password"
            {...register("repassword")}
            required
            type="password"
          />
        </div>
        <Button className="w-full" type="submit">
          Sign Up
        </Button>
      </div>
    </div>
  );
};
export default RegisterForm;
