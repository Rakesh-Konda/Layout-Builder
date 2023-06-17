// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => {
  let a

  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent, showLeftNavbar, showRightNavbar} = value

        return (
          <div className="hi">
            {showLeftNavbar ? (
              <div className="bbg">
                <h1 className="t p">Left Navbar Menu</h1>
                <ul className="ul">
                  <li className="p">Item1</li>
                  <li className="p">Item2</li>
                  <li className="p">Item3</li>
                  <li className="p">Item4</li>
                </ul>
              </div>
            ) : null}
            {showContent ? (
              <div className="bbg1">
                <h1 className="t p">Content</h1>
                <p className="p">
                  Lorem ipsum kajc kajshd kaj kahx kjad kajd ka kahd lkjad akdj
                  lakd
                </p>
              </div>
            ) : null}
            {showRightNavbar ? (
              <div className="bbg">
                <h1 className="t p">Right Navbar</h1>
                <div className="mm">
                  <p className="hlo">Ad 1</p>
                  <p className="hlo">Ad 2</p>
                </div>
              </div>
            ) : null}
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}
export default Body
