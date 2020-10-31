import cl from './Switch.module.scss'
import cn from 'classnames'

export const SwitchComponent = ({
  elements = [
    { name: 'movie', type: 'aa' },
    { name: 'people', type: 'bb' },
    { name: 'shows', type: 'cc' },
  ],
  selected = 'aa',
  onSelected,
}) => {
  const switchList = elements.map((element) => (
    <li
      className={cn({ [cl.elementSelected]: element.type === selected })}
      key={element.type}
      onClick={() => onSelected(element.type)}
    >
      {element.name}
    </li>
  ))

  return (
    <section className={cl.switch}>
      <ul>{switchList}</ul>
    </section>
  )
}
