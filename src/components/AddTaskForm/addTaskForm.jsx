function addTaskForm() {
  return (
    <section className='addTaskForm addTaskForm_is-opened'>
      <button className='addTaskForm__closeButton navbar__close'></button>
      <form className='addTaskForm__form'>
        <input
          type='text'
          className='addTaskForm__task'
          placeholder='Чем займёмся?'
        />
        <button className='addToPlan'>В план</button>
        <button className='addToProceed'>Исполняемые</button>
      </form>
      <form className='addTaskForm__form'>
        <input type='checkbox' name='checkboxUrgent' id='urgentTask' />
      </form>
    </section>
  );
}

export default addTaskForm;
