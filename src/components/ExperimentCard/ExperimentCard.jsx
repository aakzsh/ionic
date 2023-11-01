import styles from "./ExperimentCard.module.css";
import clock from "../../images/clock.svg";
import { useState } from "react";
import Modal from "react-modal";
import lock from "../../images/lock.svg";
import { useNavigate } from "react-router-dom";
import img1 from "../../images/covers/img1.png";
import img2 from "../../images/covers/img2.png";
import img3 from "../../images/covers/img3.png";
import img4 from "../../images/covers/img4.png";
import img5 from "../../images/covers/img5.png";
import img6 from "../../images/covers/img6.png";

const ExperimentCard = (props) => {
  // console.log("props are ", props);
  const data = [
    {
      title: "Exploring Colour Theory",
      time: "10 minutes",
      subtitle:
        "Try mixing different colours with your friends and explore the different patterns and combinations!",
      link: "exploring-colour-theory",
      locked: false,
      tags: ["art", "science"],
      image: img1,
    },
    {
      title: "Elements Flame Test",
      time: "5 minutes",
      subtitle:
        "Put different chemical elements on a burning flame and observe the changing colors caused due to that!",
      link: "elements-flame-test",
      locked: false,
      tags: ["thermodynamics", "chemistry"],
      image: img2,
    },
    {
      title: "Convex Lens Focal Length",
      time: "15 minutes",
      subtitle:
        "Change the position of object with respect to the convex lens to obtain a sharp image and find out lens' focal length",
      link: "convex-lens-test",
      locked: false,
      tags: ["ray optics", "physics"],
      image: img3,
    },
    {
      title: "Concave Lens Focal Length",
      time: "15 minutes",
      subtitle:
        "Change the position of object with respect to the concave lens to obtain a sharp image and find out lens' focal length",
      link: "concave-lens-test",
      locked: false,
      tags: ["ray optics", "physics"],
      image: img4,
    },
    {
      title: "Electrical Circuits",
      time: "10 minutes",
      subtitle: "This experiment is locked!",
      link: "404",
      locked: true,
      tags: ["current and electricity", "physics"],
      image: img5,
    },
    {
      title: "Rocket Propulsion Mechanics",
      time: "15 minutes",
      subtitle: "This experiment is locked!",
      link: "404",
      locked: true,
      tags: ["laws of motion", "thermodynamics", "physics"],
      image: img6,
    },
  ];
  const navigate = useNavigate();
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [username, setUsername] = useState("")
  const [roomname, setRoomname] = useState("")

  return (
    <>
      <div className={styles.cardbody}>
        {data[props.index].locked ? (
          <div className={styles.locked}>
            <img src={lock} className={styles.lock} alt="" />
            <p className={styles.locktitle}>This experiment is locked!</p>
          </div>
        ) : (
          <div></div>
        )}
        <img src={data[props.index].image} className={styles.cardimg} alt="" />
        {/* <div className={styles.cardimg}></div> */}
        <div className={styles.textcontent}>
          <strong>
            <h4>{data[props.index].title}</h4>
          </strong>
          <div className={styles.performingtime}>
            <img src={clock} alt="" className={styles.clock} />
            <p>{data[props.index].time}</p>
          </div>
          <div className={styles.tagparent}>
            {data[props.index].tags.map((el) => {
              return (
                <div className={styles.tag}>
                  <p>{el}</p>
                </div>
              );
            })}
          </div>
          <p>{data[props.index].subtitle}</p>
          <button
            className={styles.performbtn}
            onClick={() => {
              openModal();
            }}
          >
            perform
          </button>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className={styles.modalcontent}>
          {/* <div>
            <p className={styles.modallabel}>Enter your name</p>
            <input type="text" placeholder="Jon Doe" className={styles.modalinput} onChange={(evt)=>setUsername(evt.target.value)}/>
          </div> */}
          <div>
            <p className={styles.modallabel}>Enter room code</p>
            <input type="text" placeholder="CUPCAKE" className={styles.modalinput}  onChange={(evt)=>setRoomname(evt.target.value)} />
          </div>
          <button className={styles.modalbtn}
            onClick={async () => {
              console.log("/perform/" + data[props.index].link)
              await sessionStorage.setItem("username", username)
              await sessionStorage.setItem("roomname", roomname)
              navigate("/perform/" + data[props.index].link)}}
          >
            Join
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ExperimentCard;
