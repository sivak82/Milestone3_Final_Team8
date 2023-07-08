import React from "react";
import { useNavigate } from 'react-router-dom'

function Header(){

    const navigate = useNavigate();

    const cart=()=>{
        navigate('/cart')
    }

    return(

      <>
        <header style={{display:"flex", justifyContent:"space-between"}}>
                <div></div>
                <h1 class="titleh1">Verse Sports Store</h1>

                
           <img onClick={cart} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAB7CAMAAABOx+KyAAAAclBMVEX///8sNDYlLjAUHiNNU1MUIyMAAAClqKf6+vpzeHpVWlsdJylkZ2hQVlcjLC+BhYeOkJHv7/Do6utESkyWmpwACAzi4+QUICLW2NgAFBdHT1AyODo8Q0QPHB+eoKEZIybHysq5vLxscXGusrMAGhoNFxzQNZhTAAAD3klEQVR4nO2a2ZaqMBBFQxw6zPMkIEG9//+LtyKOAbWT0OBD9lr90PDAoZKcGhAhjUaj0Wg0Go1Go9FoNBoOwrO0oJ4k7tndOHRLawL2KeaxV1a4tCzkeMaQ/LD4Yjr2iC4j/VlaF23zfJU/gkEXjhcPWJFwWJvKMLxiaV1DDrC09n5pFcMFKwxc4d0CUj5AYthiabS0jCF+Czu/dt21HG6Q/Y0u2rAjKU9e0T/RFdZ4zNR+D66ms5mHpE2CsSQgQjuVLxOzT9wx+MNxVyvKMmxzIl1dedkbaYZKxVUEPGuihaSnvLWBvApR3dg3JBfUmypeqPN7IP9kgX9jtNz4zFTp4qFI5RbAlxKWq6bXj9vg2MjoqlUkMVe4/L0klFrINpBWFR5cy3JYuBPrDcZo2fiJhkrrChowhXYNu3z7LqXIqDLwWr4/2KfgAo2DULS1XyHrY7YvLQuEgQsE7L06/xVrSfdKqYKuXxBachGbMGuPI2dekyXHV2Q7qXjZ6v165zIzMGGbRebQJCq5ZbSVu/UIe+caIoElKycyCagllMMFujwPe+VZl/cKQX3NUVkXopYD+HB+Qt95ieB6/lHXMaJeRJXnzDZBI66ArpNaaT94pzcvSSsBXfINMfFN2AKFycFqiz1/8YwhsL+wKysLBWVrIVLaz6fOrgk6jh9KgWgZG/kKOmhAV5jzumKCusbDKhbB4iVfQYcHVg92lvvI2ipYQ7t2n6+2orJUKmgBqGDENvIVtBChYOrO6Ty6CrFw4XiqCTv1z1bAKldyVLMI4N9U48+o7vv/FEpymg5LfLFwtZONsbO+0sGrA7Swo50RW530yvYtJ3O67yTHvgR0MuYSYx1khbHPN7tPRDcmzNfXbvvy3wgFVDlfOMxnX5Bwlfz8jhmH2CGbmrebX5EbyhusCJKQjbp42NXo8YJID1mVqjV01tpljCKj5Y2hdBCJHwaGYsOAVtW/ihwcAGVD2/TWKmPyrfI8LkkNaD9/0hUHpuAdG/4q0Ixc4+/Zi3+2/CLAQl/dIlG41HfUzI+r2hzdPiRxq9qhMwvqOZZwMLG9HTlvRcs+PePtEt/qi/Jy4P4NZjVR7PVtXKsyJZSD3KbSw8IvuA3St7MNAK4U9yF+yQWM3Es0e6ba/s6xvD085x5e3Dsm7My9w/b3ePG7iD7ocufW9RCvJnm+lS0ZryK/PfxEuXv3KcH8+4s410yOd990HlGRXoSVlL8Vri8ncjW/fyHUeWe/b0YKhqxqmd835iIpEvKjUfvF2PiO7F2jYvlxAWHk3Cy9vPstP0rUaDQajUaj0Wg0Go1G81X8B9W5U6zS/bnYAAAAAElFTkSuQmCC'
                  style={{height:"50px",width:"50px",cursor:"pointer",marginTop:"18px",marginRight:"20px",transition: "transform 0.3s ease-in-out",objectFit: "cover",}}/>
                 
            </header>
</>
      
    );
}
export default Header;