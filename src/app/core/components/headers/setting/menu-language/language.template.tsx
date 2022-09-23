function Language({ title, onBack }: { title: string; onBack: () => void }) {
  return (
    <div className="relative py-[13px] mt-[-8px]">
      <button onClick={onBack} className="absolute w-[48px]">
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <h3 className="font-semibold text-center">{title}</h3>
    </div>
  );
}

export default Language;
