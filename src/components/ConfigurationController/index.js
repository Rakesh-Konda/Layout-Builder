// Write your code here

import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => {
  let a
  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent,
          onToggleShowLeftNavbar,
          onToggleShowRightNavbar,
        } = value

        const onChangeContent = () => {
          onToggleShowContent()
        }
        const onChangeLeftNavbar = () => {
          onToggleShowLeftNavbar()
        }
        const onChangeRightNavbar = () => {
          onToggleShowRightNavbar()
        }

        return (
          <div className="bg">
            <h1 className="h1 o">Layout</h1>
            <div className="mid">
              <input
                checked={showContent}
                type="checkbox"
                id="check"
                onChange={onChangeContent}
              />
              <label htmlFor="check" className="h1">
                Content
              </label>
            </div>
            <div className="mid">
              <input
                checked={showLeftNavbar}
                type="checkbox"
                id="left"
                onChange={onChangeLeftNavbar}
              />
              <label htmlFor="left" className="h1">
                Left Navbar
              </label>
            </div>

            <div className="mid">
              <input
                checked={showRightNavbar}
                id="right"
                type="checkbox"
                onChange={onChangeRightNavbar}
              />
              <label htmlFor="right" className="h1">
                Right Navbar
              </label>
            </div>
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

export default ConfigurationController
