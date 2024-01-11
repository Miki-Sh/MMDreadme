const Accordion = (props) => {
  const { title, text } = props;
  return (
    <details className='group'>
      <summary className='flex relative cursor-pointer list-none items-center justify-between mt-16 mb-8 py-2 sm:text-3xl bg-gradient-to-r from-blue-200 to-transparent border-l-2 border-b-2 border-blue-900'>
        { title }
        <div className='pr-4 animate-bounce'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5" stroke="currentColor" className="block h-5 w-5 group-open:hidden">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5" stroke="currentColor" className="hidden h-5 w-5 group-open:block">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
          </svg>
        </div>
      </summary>
      <div className='pb-4'>
        { text }
      </div>
    </details>
  );
};

export default Accordion;