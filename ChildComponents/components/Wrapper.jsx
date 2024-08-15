import style from "../assets/scss/Wrap.module.scss"


function Wrapper(props) {

    return (
      <>
        <div className={style.wrapper}>
            <h1>{props.title}</h1>
            <h2>The Grey</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laborum ut itaque officia aspernatur libero dolorum sint pariatur nesciunt, voluptatum quasi voluptatem non ipsam asperiores sit odio quis sapiente aliquid!</p>
            {props.children}
        </div>
      </>
    )
  }
  
  export default Wrapper