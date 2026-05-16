import { useForm } from "react-hook-form";

export default function SignupPage() {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    // API call here
    // await registerUser(data)
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12 bg-[#0a0e23] overflow-hidden relative">

      {/* Background Blur */}
      <div className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px]" />

      <div className="w-full max-w-lg relative z-10">

        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Create Account
          </h1>

          <p className="mt-2 text-slate-400 text-lg">
            Start your DSA visualization journey
          </p>
        </div>

        {/* Register Card */}
        <div
          className="
            relative overflow-hidden
            rounded-3xl
            border border-white/10
            bg-white/5
            backdrop-blur-2xl
            shadow-2xl
            p-8 md:p-10
          "
        >

          {/* Card Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl" />

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative z-10 space-y-8"
          >

            {/* Inputs */}
            <div className="space-y-6">

              {/* Full Name */}
              <div className="space-y-2">

                <label className="text-sm font-semibold uppercase tracking-wider text-indigo-300/80">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  {...register("fullName", {
                    required: "Full name is required"
                  })}
                  className="
                    w-full
                    bg-transparent
                    border-0 border-b border-slate-600
                    py-3
                    text-white
                    placeholder:text-slate-500
                    focus:outline-none
                    focus:border-indigo-400
                    transition
                  "
                />

                {errors.fullName && (
                  <p className="text-sm text-red-400">
                    {errors.fullName.message}
                  </p>
                )}

              </div>

              {/* Username */}
              <div className="space-y-2">

                <label className="text-sm font-semibold uppercase tracking-wider text-indigo-300/80">
                  Username
                </label>

                <input
                  type="text"
                  placeholder="john_doe"
                  {...register("username", {
                    required: "Username is required",
                    minLength: {
                      value: 3,
                      message: "Minimum 3 characters required"
                    }
                  })}
                  className="
                    w-full
                    bg-transparent
                    border-0 border-b border-slate-600
                    py-3
                    text-white
                    placeholder:text-slate-500
                    focus:outline-none
                    focus:border-indigo-400
                    transition
                  "
                />

                {errors.username && (
                  <p className="text-sm text-red-400">
                    {errors.username.message}
                  </p>
                )}

              </div>

              {/* Email */}
              <div className="space-y-2">

                <label className="text-sm font-semibold uppercase tracking-wider text-indigo-300/80">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="name@example.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className="
                    w-full
                    bg-transparent
                    border-0 border-b border-slate-600
                    py-3
                    text-white
                    placeholder:text-slate-500
                    focus:outline-none
                    focus:border-indigo-400
                    transition
                  "
                />

                {errors.email && (
                  <p className="text-sm text-red-400">
                    {errors.email.message}
                  </p>
                )}

              </div>

              {/* Password */}
              <div className="space-y-2">

                <label className="text-sm font-semibold uppercase tracking-wider text-indigo-300/80">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Minimum 6 characters required"
                    }
                  })}
                  className="
                    w-full
                    bg-transparent
                    border-0 border-b border-slate-600
                    py-3
                    text-white
                    placeholder:text-slate-500
                    focus:outline-none
                    focus:border-indigo-400
                    transition
                  "
                />

                {errors.password && (
                  <p className="text-sm text-red-400">
                    {errors.password.message}
                  </p>
                )}

              </div>

            </div>

            {/* Register Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="
                w-full
                py-4
                rounded-xl
                font-bold
                tracking-wide
                bg-gradient-to-r from-indigo-700 to-indigo-500
                hover:opacity-90
                active:scale-[0.98]
                transition
                text-white
                shadow-lg shadow-indigo-500/20
                disabled:opacity-50
              "
            >
              {isSubmitting ? "Creating..." : "CREATE ACCOUNT"}
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4">

              <div className="flex-1 h-px bg-slate-700" />

              <span className="text-xs uppercase tracking-widest text-slate-500">
                or continue with
              </span>

              <div className="flex-1 h-px bg-slate-700" />

            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-4">

              <button
                type="button"
                className="
                  flex items-center justify-center gap-3
                  py-3 rounded-xl
                  border border-white/10
                  bg-white/5
                  hover:bg-white/10
                  transition
                  text-white
                "
              >
                Google
              </button>

              <button
                type="button"
                className="
                  flex items-center justify-center gap-3
                  py-3 rounded-xl
                  border border-white/10
                  bg-white/5
                  hover:bg-white/10
                  transition
                  text-white
                "
              >
                GitHub
              </button>

            </div>

          </form>
        </div>

        {/* Bottom Text */}
        <p className="mt-8 text-center text-slate-400">
          Already have an account?{" "}
          <button className="text-indigo-300 font-semibold hover:underline">
            Login
          </button>
        </p>

      </div>
    </main>
  );
}