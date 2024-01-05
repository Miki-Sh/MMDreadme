const Accordion = (props) => {
  const { title, text } = props;
  return (
    <details className='group'>
      <summary className='flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900'>
        Accordion item 02
        <div className='text-secondary-500'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='block h-5 w-5 transition-all duration-300 group-open:rotate-180'>
            <path stroke-linecap='round' stroke-linejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
          </svg>
        </div>
      </summary>
      <div className='pb-4 text-secondary-500'>This is the second item's accordion body.</div>
    </details>
  );
};

export default Accordion;