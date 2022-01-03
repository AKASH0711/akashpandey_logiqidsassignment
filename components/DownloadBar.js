import "./cards/cards.css";
import p3 from "../components/cards/p3.jpg";
import p4 from "../components/cards/p4.jpg";
{
  /* App Dwnload Bar. */
}
const DownloadBar = ()=> {
    return(
    <>
<div className="container-fluid mt-5 download-main-block">
  <div className="container download-main-block-cont1">
    <div>
      <p className="download-main-block-cont1-p">
        For the best experience use inshorts app on your smartphone
      </p>
    </div>
    <div className="download-main-block-cont1-cont2">
      <img className="download-main-block-cont1-cont2-img1" src={p3} />
      <img className="download-main-block-cont1-cont2-img2" src={p4} />
    </div>
  </div>
</div>;
</>
    )
}
export default DownloadBar;
