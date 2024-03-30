import Button from "./Button";

function SuccessMessage({ onClick }) {
  return (
    <div className="w-[440px] h-[440px] p-10 flex flex-col gap-6 bg-white rounded-xl">
      <span className="font-semibold text-6xl">Thanks for subscribing!</span>
      <span>
        A confirmation email has been sent to{" "}
        <strong> ash@loremcompany.com</strong> Please open it and click the
        button inside to confirm your subscription.
      </span>
      <Button text="Dismiss message" onClick={onClick} />
    </div>
  );
}

export default SuccessMessage;
