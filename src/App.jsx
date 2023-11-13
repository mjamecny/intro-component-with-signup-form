import { useState } from "react"
import toast from "react-hot-toast"

export default function App() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [isErrorFirst, setIsErrorFirst] = useState(false)
  const [errMsgFirst, setErrMsgFirst] = useState("")

  const [isErrorLast, setIsErrorLast] = useState(false)
  const [errMsgLast, setErrMsgLast] = useState("")

  const [isErrorPass, setIsErrorPass] = useState(false)
  const [errMsgPass, setErrMsgPass] = useState("")

  const [isErrorEmail, setIsErrorEmail] = useState(false)
  const [errMsgEmail, setErrMsgEmail] = useState("")

  const regex = new RegExp(/\S+@\S+\.\S+/)
  const isValid = regex.test(email)

  function handleSubmit(e) {
    e.preventDefault()
    setIsErrorFirst(false)
    setIsErrorLast(false)
    setIsErrorEmail(false)
    setIsErrorPass(false)
    setErrMsgFirst("")
    setErrMsgLast("")
    setErrMsgEmail("")
    setErrMsgPass("")

    if (firstName === "") {
      setIsErrorFirst(true)
      setErrMsgFirst("First name cannot be empty")
    }

    if (lastName === "") {
      setIsErrorLast(true)
      setErrMsgLast("Last name cannot be empty")
    }

    if (!isValid) {
      setIsErrorEmail(true)
      setEmail("")
      setErrMsgEmail("Looks like this is not an email")
    }

    if (password === "") {
      setIsErrorPass(true)
      setErrMsgPass("Password cannot be empty")
    }

    if (firstName && lastName && isValid && password) {
      setFirstName("")
      setLastName("")
      setEmail("")
      setPassword("")
      toast.success("You've signed up, check your email!", { duration: 5000 })
    }
  }

  return (
    <div className="h-screen flex bg-red bg-mobile md:bg-desktop justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 md:items-center gap-1.6 border-grayishBlue rounded-md py-6.4 max-w-[1200px] px-2.4">
        <div className="flex flex-col gap-1.6">
          <h1 className="text-[#fff] text-2.4 md:text-4.4 md:text-left font-bold text-center">
            Learn to code by watching others
          </h1>
          <p className="text-[#fff] text-center md:text-left">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>
        <div className="flex flex-col gap-1.6">
          <p className="px-4.8 py-1.6 text-1.4 bg-blue rounded-lg text-[#fff] text-center">
            <b className="text-[#fff]">Try it free 7 days</b> then $20/mo.
            thereafter
          </p>
          <form
            className="flex flex-col gap-1.6 bg-[#fff] p-2.4 rounded-md drop-shadow-lg"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="flex flex-col gap-0.4 relative">
              <input
                className={`border ${
                  isErrorFirst ? "border-red" : "border-grayishBlue"
                } rounded-md py-1.2 px-1.2 placeholder:text-darkBlue placeholder:font-semibold placeholder:text-1.4 focus:${
                  isErrorFirst ? "border-red" : "border-darkBlue"
                } outline-none`}
                type="text"
                placeholder={`${isErrorFirst ? "" : "First Name"}`}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {isErrorFirst && (
                <img
                  className="absolute right-[20px] top-[13px]"
                  src="icon-error.svg"
                  alt="error"
                />
              )}
              <p className="text-red text-1 self-end">{errMsgFirst}</p>
            </div>
            <div className="flex flex-col gap-0.4 relative">
              <input
                className={`border ${
                  isErrorLast ? "border-red" : "border-grayishBlue"
                } rounded-md py-1.2 px-1.2 placeholder:text-darkBlue placeholder:font-semibold placeholder:text-1.4 focus:${
                  isErrorLast ? "border-red" : "border-darkBlue"
                } outline-none`}
                type="text"
                placeholder={`${isErrorLast ? "" : "Last Name"}`}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {isErrorLast && (
                <img
                  className="absolute right-[20px] top-[13px]"
                  src="icon-error.svg"
                  alt="error icon"
                />
              )}

              <p className="text-red text-1 self-end">{errMsgLast}</p>
            </div>
            <div className="flex flex-col gap-0.4 relative">
              <input
                className={`border ${
                  isErrorEmail ? "border-red" : "border-grayishBlue"
                } rounded-md py-1.2 px-1.2 ${
                  isErrorEmail
                    ? "placeholder:text-red"
                    : "placeholder:text-darkBlue"
                } placeholder:font-semibold placeholder:text-1.4 focus:${
                  isErrorEmail ? "border-red" : "border-darkBlue"
                } outline-none`}
                type="email"
                placeholder={
                  isErrorEmail ? "email@example/com" : "Email Address"
                }
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {isErrorEmail && (
                <img
                  className="absolute right-[20px] top-[13px]"
                  src="icon-error.svg"
                  alt="error icon"
                />
              )}

              <p className="text-red text-1 self-end">{errMsgEmail}</p>
            </div>
            <div className="flex flex-col gap-0.4 relative">
              <input
                className={`border ${
                  isErrorPass ? "border-red" : "border-grayishBlue"
                } rounded-md py-1.2 px-1.2 placeholder:text-darkBlue placeholder:font-semibold placeholder:text-1.4 focus:${
                  isErrorPass ? "border-red" : "border-darkBlue"
                } outline-none`}
                type="password"
                placeholder={`${isErrorPass ? "" : "Password"}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {isErrorPass && (
                <img
                  className="absolute right-[20px] top-[13px]"
                  src="icon-error.svg"
                  alt="error icon"
                />
              )}

              <p className="text-red text-1 self-end">{errMsgPass}</p>
            </div>

            <button className="uppercase bg-green text-[#fff] rounded-md py-1.6 hover:bg-green/80 transition-colors duration-300">
              Claim your free trial
            </button>

            <p className="text-grayishBlue text-1.2 text-center">
              By clicking the button, you are agreeing to our{" "}
              <a className="text-red font-semibold" href="#">
                Terms and Services
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
