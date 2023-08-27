import React, { useContext, useEffect, useState } from 'react'
import { LocationIcon } from '../Common/Icons'
import { useNavigate } from 'react-router-dom'
import { LoginContext } from '../../App'
import LogOut from '../LogOut'
import Button from '../Common/Button'
import './Head.css'

export default function Header() {
  const [isFixed, setIsFixed] = useState(false)

  const navigate = useNavigate()

  const { authenticated, profile } = useContext(LoginContext)!

  const handleClick = () => {
    navigate('/SignIn')
  }

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsFixed(true)
    } else {
      setIsFixed(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={`header ${isFixed ? 'fixed top-0 shadow-md z-10' : 'relative transition-top duration-300'} 
    bg-[#031327] h-[100px] w-full`}
    >
      <div className='container flex items-center h-full'>
        <div className='flex justify-between items-center grow h-full'>
          <div>
            <img
              src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAABNVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////7QibkNivkNCn/+/v9q577Si/+8/L/7uz62tj8jHvvh4D8g3HqX1bMzc37SC3Rvrv+9/bwkozsbVn/8/HMzc7kOS7mOyW/LSP+8O/5y8joUkj8QibvgXr8/f35+frQ0ND5SS/iNSrYMyj9ppnQMSb39vbg39/W1tbfNCnHLyT//fz9+fjv7+/8qZzwPSbz8/Pr6+vn5+fj4+Pb29v6xsLyopr5opTnnJHhlIj7Ryz+6ef9rqP0qaH5UzrlOjD7RSnqOyW6KyL/4t3kz8zgzcrQtrP9tar9sqfte3TCd3L6emftbVrsbFnpUj3mQjgGeX2GAAAAF3RSTlMA+9EF9vDruKakj2lPSS8sGQ3i4b69OIta07gAAAM+SURBVGje1drpUhNBFIbhnuwrYe9JIIoLERQJqAkkJmELsqNsIu77/V+CJrH8JsxUf52R6SrfG3iqq7t/nSOchXPpZChmyX/KioWS6VxYeDeSSYwSQBsaTWRGPIhwNh6RN1gknnWdZjgVlTdcNDXcbwyNywAaH3IakyEZSKFJGEPM8K/8PcvwhAysiT/3Ek7JAEv13lg2KgMsmu3+wbgMtHjnV2YiMtAiGSHCCRlwibDIjcmAG8uJtCUDzkqLpAy8pAjJwAuJmAy8mLBk4FlCGuh/QZrtilTEkJnzOW7srK20qqfTt30iM/cfz1OluTY7u/D+q31PoQiVUShQpXrw23jw3bZVilAZ+TxTqq2O8dC2lYpQGkyp7MNQKEJlUGVvBYZCEQqDKrswlIpQGExpw1ArghpQ3I8XBhSOwKBK9QAGUYTKgJI/cj9eGEwRKgPIk2XX44VBFaFtzG05jb0FGFQRusbSs+694PHCoIrQNpy334ZBFSDccL6xnTUYXAHCDShNGHqK0DWgVA9w51wBwg0olRYMTUVoGlBaKzA0FaE0fh72DFRrfPnwTcuAAuSo4HWQ056BGlflH09tVycXl7ar4uF15NbdvFt5PX/4Oe+sflVetD2M7XevVl3G9BQQLwVMoc8olxdxDnTxtrIPBQaQPkXZOoz+Lo+nKntQYAAhCowNGNcqPZ+Suy+hwACipdRgeCttKDCA6Ci1RtdQKTtdBQYQXaVnqJXm0SoMF0KVWp0YHWVLVs+LMFwIU+obHYMox1ty81OxBAMIUWDQTjrKxzMYQBQKHi/+ObuXzU3JESgwGjCIMi2RA+FKDQZFzrQQKHhY3MAf9EaoUn/j1wDClHX/BhCi1F74N4AQxafBESh+DY5A8W1wBMod7f8BQxNBj6BQgyH8LNxgCFe4QRGucIMjXOEGR+jt87fLEa5wgyNc4QZHuMINjnCFGxzhCjc4whVucIQr3OAIV7jBEa5wgyNcgaEfRhuDKKWBDAtDmgGU0jYMjWIYN+kqMHQLYXCmrRRh6JUcfAS4tDygYaWNDDONjGVNDJiNjMpNDP2NrC+YWMQwsVJiYjnGxJqPiYUlE6tXRpfIjKzD/QKIj6Xp8VGBdwAAAABJRU5ErkJggg=='
              alt='Logo'
              className='inline-block w-[50px] h-[50px] object-cover'
            />
          </div>
          <div className='flex gap-12 text-[#fff] text-[1.8rem] uppercase font-[600]'>
            <a href=''>Lịch chiếu</a>
            <a href=''>Cụm rạp</a>
            <a href=''>Tin tức</a>
            <a href=''>Ứng dụng</a>
          </div>
          <div className='flex items-center gap-3 h-full'>
            <div className='profile relative cursor-pointer flex items-center gap-3 h-[50%]'>
              {authenticated && (
                <img
                  className='w-[30px] h-[30px] rounded-[50%] '
                  src='https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-1/364743708_1725906504494525_1533049139051175614_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=dTDhbyvNbbYAX-Z5Okk&_nc_ht=scontent.fdad3-4.fna&oh=00_AfBzGGr_Cwfmlmd5MSxjddeu7sUBAuX4OH5TZ7-7T_wgLg&oe=64E38399'
                  alt=''
                />
              )}

              <h2 className='hover:opacity-[0.9]'>
                {authenticated ? (
                  <div>
                    <div className='text-[#fff] z-[100]'>{profile?.hoTen}</div>

                    <div className='logout absolute z-[100] bg-white rounded-[5px] top-[100%] right-[-14%] shadow-[0px_7px_20px_3px_rgba(0,0,0,0.75)]'>
                      <LogOut />
                    </div>
                  </div>
                ) : (
                  <div onClick={handleClick} className='mb-[20px] mr-5'>
                    <Button btnLogin>Đăng Nhập</Button>
                  </div>
                )}
              </h2>
            </div>
            <div className='w-[1px] h-[30px] border-[1px] border-solid text-[#ccc]'></div>
            <LocationIcon />
            <h2 className='text-[#fff]'>Đà Nẵng</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
