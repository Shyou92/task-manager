function Card() {
  return (
    <section className="card">
      <button className="card__delete" type='button'></button>
      <span className="card__date">12.05.2021</span>
      <span className="card__text">Lorem ipsum dolor sit amet consectetur.</span>
      <div className="card__checkbox">
        <label htmlFor="urgentTask">Срочно!</label>
        <input type="checkbox" name='checkboxUrgent' id="urgentTask" className='card__checkbox card__checkbox_urgent' />
      </div>
    </section>
  )
}

export default Card;