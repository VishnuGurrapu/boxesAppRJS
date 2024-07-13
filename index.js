const Box = props => {
  //  Write your code here.
  const {classname, text} = props
  return (
    <div className={classname}>
      {' '}
      <p className='text'>{text}</p>{' '}
    </div>
  )
}

const element = (
  //  Write your code here.
  <div className='bgcon'>
    <h1 className='mainHead'>Boxes</h1>
    <div className='box'>
      <Box classname='small' text='Small' />
      <Box classname='medium' text='Medium' />
      <Box classname='large' text='Large' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
