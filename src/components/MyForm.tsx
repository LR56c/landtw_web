import { FC } from "react";

export const MyForm: FC = () =>
{
  return (
    <>
      <div
        className="w-full xs:h-24 h-16 bg-red-500 flex flex-col justify-center items-center"
      >
        <p
          className="text-white text-3xl"
        >
          Get in touch
        </p>
      </div>
      <div
        className="w-full h-full bg-red-500 flex flex-col items-center pb-8"
      >
        <div className="form-control w-full space-y-3 sm:max-w-md max-w-[70%]">
          <div>
            <label className="label">
              <span className="label-text text-white">Name</span>
            </label>
            <input
              type="text"
              className="bg-white input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="text"
              className="bg-white input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text text-white">Subject</span>
            </label>
            <input
              type="text"
              className="bg-white input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text text-white">Message</span>
            </label>
            <textarea className="textarea textarea-bordered h-24 w-full bg-white"></textarea>
          </div>

          <button className="btn btn-sm w-20 btn-error text-white self-center">Submit</button>
        </div>
      </div>
    </>
  )
}
