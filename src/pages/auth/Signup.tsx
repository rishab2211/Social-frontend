import React, { useState } from "react";
import { Label } from "../../components/label";
import { Input } from "../../components/input";
import { cn } from "../../lib/utls";

export function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("other");
  const [emailWarn, setEmailWarn] = useState(false);
  const [passwordWarn, setPasswordWarn] = useState(false);
  const [confirmPasswordWarn, setConfirmPasswordWarn] = useState(false);
  const [confirmPasswordMessage, setConfirmPasswordMessage] = useState("");

  const resetWarning = () => {
    if (emailWarn) {
      setEmailWarn(false);
    } else if (passwordWarn) {
      setPasswordWarn(false);
    } else if (confirmPasswordWarn) {
      setConfirmPasswordWarn(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    resetWarning();

    if (!email) {
      console.log("email is empty");
      setEmailWarn(true);
      return;
    }
    if (!password) {
      console.log("password is empty");
      setPasswordWarn(true);
      return;
    }
    if (!confirmPassword) {
      console.log("confirm password is empty");
      setConfirmPasswordMessage("Confirm Password field cannot be empty.");
      setConfirmPasswordWarn(true);
      return;
    }
    if (password != confirmPassword) {
      setConfirmPasswordMessage("Password and Confirm Password do not match.");
      setConfirmPasswordWarn(true);
      return;
    }

    console.log("Form submitted");
    console.log("EMAIL : ", email);
    console.log("PASSWORD :", password);
    console.log("CONFIRM PASSWORD :", confirmPassword);
    console.log("GENDER :", gender);
  };

  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-xl bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <h2 className=" text-lg sm:text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Join the community now
      </h2>
      <p className="mt-2 max-w-sm text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
        Create an account to share your thoughts, follow friends, and explore
        your social feed.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-1">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="rishabraj2211@gmail.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p
            className={cn(
              "text-red-500 text-sm font-mono ml-2",
              emailWarn ? "block" : "hidden"
            )}
          >
            Email field cannot be empty.
          </p>
        </LabelInputContainer>
        <LabelInputContainer className="mb-1">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p
            className={cn(
              "text-red-500 text-sm font-mono ml-2",
              passwordWarn ? "block" : "hidden"
            )}
          >
            Password field cannot be empty.
          </p>
        </LabelInputContainer>
        <LabelInputContainer className="mb-1">
          <Label htmlFor="confirmpassword">Confirm Password</Label>
          <Input
            id="confirmpassword"
            placeholder="••••••••"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p
            className={cn(
              "text-red-500 text-sm font-mono ml-2",
              confirmPasswordWarn ? "block" : "hidden"
            )}
          >
            {confirmPasswordMessage}
          </p>
        </LabelInputContainer>

        <LabelInputContainer className="space-y-2 ">
          <Label>Gender</Label>
          <div className="flex flex-col gap-1 mb-5 text-xs sm:text-sm">
            <label htmlFor="male" className="flex items-center space-x-2">
              <input
                type="radio"
                name="male"
                id="male"
                value="male"
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
                className="cursor-pointer"
              />
              <span className="text-white">MALE</span>
            </label>
            <label htmlFor="female" className="flex items-center space-x-2">
              <input
                type="radio"
                name="female"
                value="female"
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
                className="cursor-pointer"
              />
              <span className="text-white">FEMALE</span>
            </label>
            <label htmlFor="other" className="flex items-center space-x-2">
              <input
                type="radio"
                name="other"
                value="other"
                checked={gender === "other"}
                onChange={(e) => setGender(e.target.value)}
                className="cursor-pointer"
              />
              <span className="text-white">PREFER NOT TO SAY</span>
            </label>
          </div>
        </LabelInputContainer>

        <button
          className=" cursor-pointer group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
