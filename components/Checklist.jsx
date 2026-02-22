const checklistItems = [
  'Tu un logon me se hai jo bina judge kiye sun leti hai.',
  'Teri honesty mujhe better insaan banne me help karti hai.',
  'Tera trust mere liye casual cheez nahi, bahut valuable hai.',
  'Tere saath wali friendship safe, real aur genuine lagti hai.',
  'Tu important hai, isliye yeh apology bhi pure respect ke saath hai.'
];

export default function Checklist() {
  return (
    <div className="space-y-3">
      {checklistItems.map((item) => (
        <div key={item} className="check-line">
          <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-[11px] font-bold text-emerald-700 dark:bg-emerald-300/25 dark:text-emerald-200">
            {'\u2713'}
          </span>
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
}
