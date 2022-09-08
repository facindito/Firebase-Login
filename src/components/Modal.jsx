import ReactDOM from 'react-dom'

function Modal({ children, onClose }) {
  return (
    <div className='bg-slate-400 bg-opacity-80 fixed inset-0 flex justify-center items-center p-4 backdrop-blur-sm z-10'>
      <div className='bg-gray-200 w-96 p-4 rounded-md relative'>
        <button onClick={onClose} className='absolute top-2 right-4'>
          X
        </button>
        {children}
      </div>
    </div>
  )
}

export default function ModalPortal({ children, onClose }) {
  return ReactDOM.createPortal(<Modal onClose={onClose}>{children}</Modal>, document.getElementById('modal-root'))
}
