import './style.css'
import imageUrl from '../../assets/images/1-removebg-preview-BRsdm1cru-transformed.png'
export const MainImage = () => {
  return(
    <div className={'main-div'}>
      <button>
        <div>
          <img className={'image'} src={imageUrl} alt={'img'}/>
        </div>
      </button>
    </div>
  );
}
