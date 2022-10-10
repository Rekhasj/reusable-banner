import './index.css'

const BannerCardItem = props => {
  const {bannerCardsList} = props
  const {className, headerText, description} = bannerCardsList

  return (
    <li className={`${className} banner-list`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="details">{description}</p>
        <button className="button" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}
export default BannerCardItem
