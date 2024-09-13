export default function PlayButton() {
  return (
    <div className="w-[36px] h-[36px] bg-gray-300 flex place-content-center items-center rounded-full">
      <svg
        className="rounded-full w-[36px] h-[36px] bg-gray-50 "
        xmlns="http://www.w3.org/2000/svg"
        fill="#8A53FF"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="none"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
        />
      </svg>
    </div>
  );
}
