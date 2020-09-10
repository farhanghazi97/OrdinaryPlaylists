import React, { useState, useEffect } from 'react';

export default function Hamburger() {

    const Desktop = [
        {
            title:'MY BOOKMARKS', 
            url: '#', 
            cName: 'nav-links'
        },
        {
            title:'OUR STORY', 
            url: '#', 
            cName: 'nav-links'
        },
        {
            title:'FAQ', 
            url: '#', 
            cName: 'nav-links'
        }
    ]

    const Mobile = [{
        title:'HOME', 
        url: '#', 
        cName: 'nav-links'
    },
    {
        title:'OUR STORY', 
        url: '#', 
        cName: 'nav-links'
    },
    {
        title:'MY BOOKMARKS', 
        url: '#', 
        cName: 'nav-links'
    },
    {
        title:'FAQ', 
        url: '#', 
        cName: 'nav-links'
    }]
    const size = useWindowSize();
    var Console = undefined;
    if (size.width < 768) {
        Console = Mobile;
    } else {
        Console = Desktop;
    }
    const [ menuActive, setMenuState ] = useState(false);
    
    if (menuActive) {
        let s = document.getElementById('nav-icon')
        s.classList.add('open');
    } 
    return (
        <div className="NavBar">
            <header className="logo">
                <svg viewBox="0 0 348 200" fill="none">
                    <path d="M99.29 39.8854C95.7186 31.5556 89.6053 24.5834 81.8335 19.9767C74.1083 15.4526 64.4178 13.1633 53.0467 13.1633C41.9061 13.1633 32.3647 15.4254 24.6665 19.895C16.9371 24.4887 10.8579 31.4312 7.30497 39.7219C3.22548 48.7292 1.16541 59.9576 1.16541 73.2029C1.16541 86.6252 3.19837 97.9627 7.2372 106.929C10.7688 115.222 16.8481 122.161 24.5852 126.729C32.3376 131.253 42.0145 133.542 53.372 133.542C64.7295 133.542 74.2302 131.253 81.9149 126.729C89.6284 122.114 95.7095 115.185 99.3035 106.915C103.369 97.9491 105.443 86.707 105.443 73.5299C105.443 60.3528 103.369 48.9063 99.29 39.8854ZM93.3266 99.8432C91.2909 107.154 88.3446 114.178 84.5577 120.747L84.0563 121.632L83.2024 122.164C79.0208 124.615 74.4268 126.273 69.6493 127.056C64.4602 128.112 59.1814 128.66 53.887 128.691C45.5037 128.891 37.2664 126.462 30.3182 121.741C23.4782 116.777 18.2266 109.916 15.2064 101.996C11.6266 92.6571 9.89555 82.705 10.1105 72.6987C9.97944 63.9408 10.8618 55.1972 12.7398 46.6443C14.3305 39.6898 16.9919 33.0278 20.6277 26.8991L21.1291 26.1088L21.8881 25.6046C26.3045 22.896 31.1716 21.0125 36.2544 20.0448C41.6695 18.8608 47.1934 18.2534 52.735 18.2325C61.0869 18.0252 69.3005 20.4037 76.2632 25.0459C83.0974 29.9446 88.3366 36.7674 91.3207 44.6548C94.8359 53.9191 96.5342 63.7801 96.3218 73.6934C96.4902 82.4919 95.4828 91.2734 93.3266 99.8023V99.8432Z" fill="#F4F7F4"/>
                    <path d="M79.3128 0C77.831 3.4612 76.2001 7.35845 74.4201 11.6918C72.7576 15.7071 70.9912 20.1404 69.1209 24.9915C65.5971 33.8489 61.6396 44.0008 57.2484 55.4473L50.4718 72.7942L45.9179 83.6956C42.7465 91.6536 37.9487 103.754 32.5952 117.19L26.781 131.744C15.3421 160.264 3.18498 190.216 0 197.683L4.93333 200L31.633 133.461L36.9729 120.161L41.459 109.014C42.8685 104.862 44.8201 99.6798 47.3139 93.466C49.8077 87.2522 52.3557 80.9293 54.9579 74.4975C56.4758 70.8637 57.9396 67.289 59.3491 63.7732C60.7586 60.2575 62.1681 56.7963 63.5777 53.3897C64.9872 50.1192 66.9388 45.1228 69.4326 38.4002C70.8602 34.6665 72.2155 31.1462 73.4985 27.8395C75.5767 22.4705 77.4651 17.6512 79.1637 13.3815C80.8624 9.11176 82.3939 5.31444 83.7582 1.98951L79.3128 0Z" fill="#F4F7F4"/>
                    <path d="M118.3 58.3498C118.49 54.716 118.58 49.0291 118.571 41.2891C118.562 33.5491 118.508 27.844 118.409 24.1739H124.318L123.559 32.568H123.992C124.532 30.7879 125.396 29.1244 126.54 27.6623C127.565 26.3537 128.86 25.2844 130.335 24.5282C131.781 23.7983 133.38 23.4247 134.998 23.4381C136.859 23.3765 138.694 23.8902 140.256 24.9097C141.799 26.0379 142.985 27.5899 143.672 29.3793C144.668 31.9023 145.307 34.5537 145.569 37.2556L139.985 38.0187C139.726 35.2702 138.855 32.6155 137.437 30.2514C136.897 29.4252 136.155 28.7529 135.281 28.2994C134.407 27.8459 133.432 27.6265 132.45 27.6623C131.335 27.7179 130.253 28.0571 129.305 28.6483C128.357 29.2394 127.573 30.063 127.028 31.0418C125.287 33.7395 123.945 36.6772 123.044 39.7629L122.664 34.3122H124.128C124.128 35.3206 124.128 36.329 124.128 37.3373C124.128 38.3457 124.128 39.3269 124.128 40.308V42.8153C124.128 49.6287 124.209 54.8614 124.345 58.3498H118.3Z" fill="#F4F7F4"/>
                    <path d="M173.977 58.3495C173.977 57.8317 173.977 57.1776 174.112 56.36C174.248 55.5424 174.289 54.6567 174.356 53.7164C174.424 52.7762 174.451 51.9177 174.519 51.1546C174.587 50.3915 174.668 49.7919 174.736 49.4649H174.248C173.237 52.1969 171.491 54.5933 169.206 56.3873C166.887 58.2078 164.016 59.1702 161.074 59.1126C158.668 59.1851 156.308 58.4358 154.379 56.9869C152.433 55.3862 150.984 53.2581 150.205 50.8548C149.19 47.7805 148.704 44.5546 148.768 41.3161C148.71 38.1668 149.234 35.0341 150.313 32.0771C151.199 29.5979 152.781 27.4301 154.867 25.8361C157.005 24.3005 159.586 23.5152 162.213 23.6013C164.078 23.5899 165.922 23.989 167.617 24.7706C169.312 25.5521 170.817 26.6972 172.025 28.1254C173.099 29.3609 173.861 30.8377 174.248 32.4314H174.79C174.79 31.2595 174.668 29.7878 174.519 28.0164C174.519 27.3214 174.397 26.3811 174.248 25.182C174.248 24.487 174.248 23.8193 174.248 23.138C174.248 22.4566 174.248 21.7753 174.248 21.094C174.248 20.4126 174.248 19.7313 174.248 19.0772V17.1695L179.94 16.7334C179.868 22.1841 179.832 28.4161 179.832 35.4293V40.4712C179.832 46.4307 179.886 52.3901 179.994 58.3495H173.977ZM163.839 54.8066C166.09 54.856 168.281 54.0701 169.992 52.599C171.887 50.8806 173.347 48.7314 174.248 46.3307V39.3266C174.296 37.1776 173.782 35.0535 172.757 33.1673C171.861 31.4831 170.531 30.0714 168.908 29.0792C167.447 28.1821 165.768 27.7104 164.056 27.7166C161.608 27.7118 159.214 28.4323 157.171 29.7878C156.266 31.4057 155.608 33.1513 155.219 34.966C154.751 37.0222 154.514 39.1249 154.515 41.2343C154.533 43.2505 154.806 45.2561 155.328 47.2028C155.827 49.2347 156.824 51.1085 158.228 52.6535C158.959 53.3903 159.837 53.9631 160.804 54.3342C161.771 54.7053 162.806 54.8663 163.839 54.8066Z" fill="#F4F7F4"/>
                    <path d="M190.62 20.7398C189.61 20.8455 188.597 20.5738 187.774 19.9767C187.488 19.6402 187.272 19.2502 187.137 18.8293C187.002 18.4083 186.951 17.9647 186.988 17.5239C186.955 17.1226 187.01 16.719 187.151 16.342C187.292 15.965 187.514 15.6241 187.801 15.3436C188.669 14.8784 189.637 14.635 190.62 14.635C191.603 14.635 192.571 14.8784 193.439 15.3436C193.726 15.6241 193.948 15.965 194.089 16.342C194.229 16.719 194.285 17.1226 194.252 17.5239C194.292 17.9648 194.242 18.4093 194.107 18.8307C193.972 19.2521 193.754 19.6418 193.466 19.9767C192.646 20.5798 191.63 20.852 190.62 20.7398V20.7398ZM187.693 58.3497C187.846 52.3811 187.918 47.0031 187.909 42.2156C187.909 36.0654 187.837 30.0151 187.693 24.0647H188.451C188.79 24.1361 189.135 24.1726 189.482 24.1737H191.84C192.195 24.1741 192.549 24.1375 192.897 24.0647H193.602C193.493 29.9061 193.439 35.9563 193.439 42.2156C193.439 47.1212 193.439 52.4902 193.602 58.3497H187.693Z" fill="#F4F7F4"/>
                    <path d="M201.245 58.3493C201.435 54.7155 201.525 49.0286 201.516 41.2886C201.507 33.5486 201.453 27.8435 201.353 24.1734H207.263L206.504 32.5675H206.992C207.679 30.726 208.709 29.0333 210.027 27.5801C211.276 26.2433 212.803 25.2009 214.5 24.5277C216.285 23.8155 218.191 23.4636 220.111 23.492C222.239 23.3758 224.348 23.949 226.129 25.1273C227.674 26.2975 228.798 27.9436 229.327 29.8149C230.046 32.294 230.411 34.8634 230.411 37.4458C230.411 38.5632 230.411 39.8987 230.411 41.4521C230.411 43.0056 230.411 44.6408 230.411 46.385C230.411 48.8469 230.438 51.2725 230.493 53.6617C230.493 56.0327 230.493 57.6134 230.574 58.3765H224.665C224.746 53.798 224.773 49.1103 224.773 44.3137V39.7079C224.794 37.7538 224.64 35.8019 224.312 33.8756C224.057 32.2607 223.374 30.7448 222.334 29.4878C221.776 28.8529 221.079 28.3574 220.298 28.0404C219.517 27.7235 218.674 27.5938 217.834 27.6618C215.529 27.6483 213.296 28.4708 211.545 29.9784C209.519 31.8386 207.99 34.1817 207.1 36.7918V44.2047C207.1 50.1596 207.181 54.8608 207.317 58.322L201.245 58.3493Z" fill="#F4F7F4"/>
                    <path d="M246.567 59.1133C244.753 59.1455 242.955 58.7635 241.309 57.9959C239.893 57.3089 238.693 56.2434 237.839 54.9162C236.883 53.3125 236.459 51.4442 236.63 49.5821C236.8 47.7201 237.556 45.961 238.788 44.5599C240.384 42.912 242.385 41.7179 244.589 41.0987C247.165 40.3275 249.843 39.9508 252.531 39.9813C253.33 39.9813 255.824 40.063 260.012 40.2538V39.518C260.032 37.4597 259.786 35.4076 259.28 33.4132C258.885 31.8514 257.966 30.4746 256.678 29.5159C255.046 28.4509 253.116 27.9443 251.175 28.0715C250.217 28.0667 249.264 28.2233 248.356 28.5348C247.419 28.8421 246.512 29.2343 245.646 29.7067C244.815 30.5808 244.146 31.5958 243.667 32.7046C243.078 34.0479 242.651 35.4568 242.393 36.9016L236.863 35.866C237.344 33.4471 238.263 31.1377 239.574 29.0526C240.8 27.2473 242.511 25.8295 244.507 24.9646C246.943 23.9818 249.555 23.5178 252.178 23.6019C254.846 23.4781 257.495 24.1108 259.822 25.4279C261.826 26.7007 263.337 28.6239 264.105 30.8786C265.081 33.7633 265.54 36.7991 265.46 39.845V42.3796C265.46 43.1699 265.46 43.9603 265.46 44.7234V47.2852C265.46 48.1165 265.46 48.9886 265.46 49.9016C265.46 52.1091 265.46 54.9253 265.46 58.3502H259.605L260.527 48.4299H259.985C259.438 50.3828 258.503 52.2037 257.235 53.7824C255.968 55.3611 254.395 56.6648 252.612 57.6143C250.744 58.5894 248.672 59.1032 246.567 59.1133V59.1133ZM248.953 54.6437C250.666 54.6433 252.339 54.1207 253.75 53.1447C255.248 52.1488 256.582 50.9261 257.708 49.52C258.639 48.4151 259.415 47.1862 260.012 45.868V42.8702L257.003 42.7611C255.973 42.7611 254.97 42.7611 253.994 42.7611H253.398C250.727 42.7407 248.074 43.2022 245.564 44.1238C244.498 44.4572 243.574 45.1407 242.94 46.0647C242.306 46.9887 241.999 48.0998 242.068 49.2202C242 50.0085 242.122 50.8016 242.424 51.5323C242.726 52.2629 243.199 52.9095 243.802 53.4173C245.347 54.3642 247.15 54.7936 248.953 54.6437V54.6437Z" fill="#F4F7F4"/>
                    <path d="M292.159 59.222C288.03 59.3577 283.926 58.5176 280.178 56.7692C277.029 55.1966 274.478 52.6315 272.914 49.4652C271.175 45.697 270.339 41.5711 270.474 37.4192C270.339 33.2935 271.174 29.1941 272.914 25.4549C274.482 22.2987 277.033 19.7437 280.178 18.1782C283.963 16.5598 288.033 15.7256 292.145 15.7256C296.258 15.7256 300.328 16.5598 304.113 18.1782C307.271 19.7348 309.833 22.2914 311.404 25.4549C313.144 29.1941 313.979 33.2935 313.844 37.4192C313.979 41.5711 313.143 45.697 311.404 49.4652C309.838 52.6394 307.276 55.2064 304.113 56.7692C300.374 58.5149 296.28 59.355 292.159 59.222V59.222ZM292.159 57.2597C295.897 57.3788 299.611 56.6133 303.001 55.0249C305.873 53.5866 308.197 51.241 309.615 48.3478C311.193 44.9385 311.955 41.2049 311.838 37.4464C311.957 33.6877 311.196 29.9535 309.615 26.545C308.208 23.6505 305.88 21.3105 303.001 19.8951C299.569 18.4418 295.883 17.6931 292.159 17.6931C288.435 17.6931 284.749 18.4418 281.317 19.8951C278.454 21.3238 276.139 23.6609 274.73 26.545C273.156 29.9556 272.395 33.6883 272.507 37.4464C272.398 41.2043 273.159 44.9363 274.73 48.3478C276.15 51.2309 278.461 53.5737 281.317 55.0249C284.709 56.6039 288.423 57.36 292.159 57.2325V57.2597ZM280.666 52.1906C280.666 51.4275 280.666 50.6099 280.666 49.765C280.666 48.9202 280.666 48.0208 280.747 47.1214C280.747 45.3772 280.829 43.633 280.856 41.916C280.883 40.199 280.856 38.5638 280.856 37.0376C280.856 35.5114 280.856 34.0125 280.856 32.3228C280.856 30.633 280.856 28.8752 280.747 27.0628C280.747 26.1544 280.72 25.2459 280.666 24.3375C280.666 23.4245 280.666 22.566 280.666 21.7756H292.755C294.976 21.7105 297.194 21.9675 299.342 22.5387C300.86 22.9343 302.205 23.8259 303.164 25.0733C304.129 26.5294 304.604 28.2585 304.519 30.0062C304.583 31.597 304.228 33.1765 303.489 34.5848C302.828 35.7838 301.802 36.7387 300.562 37.3101C299.127 37.9452 297.576 38.2701 296.008 38.264V38.7546C297.814 38.8004 299.564 39.3994 301.023 40.4716C302.411 41.7637 303.383 43.4436 303.815 45.2954L305.333 49.765C306.065 51.8635 306.58 53.4715 306.905 54.5616L302.676 55.5973C302.283 54.5344 301.822 53.2126 301.321 51.6183C300.819 50.0239 300.359 48.5113 299.966 47.0942L299.667 46.1675C299.586 45.8678 299.518 45.5952 299.478 45.3499C299.104 44.2185 298.575 43.1452 297.906 42.1613C297.382 41.4244 296.657 40.8563 295.818 40.5261C294.751 40.1384 293.618 39.9626 292.484 40.0082H285.111C285.111 41.2074 285.111 42.4338 285.111 43.6875V52.2723L280.666 52.1906ZM291.942 37.2011C293.542 37.2596 295.14 37.0289 296.659 36.5198C297.698 36.1583 298.574 35.4328 299.125 34.4758C299.658 33.3549 299.91 32.1196 299.857 30.8783C299.938 29.585 299.666 28.2939 299.071 27.1446C298.52 26.2677 297.657 25.6344 296.659 25.3731C295.171 24.9987 293.638 24.8336 292.105 24.8825H284.84V37.1466L291.942 37.2011Z" fill="#F4F7F4"/>
                    <path d="M324.579 66.6891C323.468 66.6931 322.36 66.5835 321.272 66.3621C320.262 66.1527 319.266 65.8796 318.29 65.5445L318.887 60.7479C320.405 60.8841 322.044 61.0068 323.793 61.1022C325.541 61.1976 327.181 61.2521 328.699 61.2929C329.282 60.3391 329.797 59.4397 330.244 58.5676C330.695 57.717 331.102 56.8437 331.464 55.9513C331.681 55.4334 331.87 54.9429 332.033 54.4796C332.196 54.0163 332.422 53.5257 332.711 53.0079H332.223C331.915 53.5339 331.51 53.9963 331.03 54.3706C330.529 54.7417 329.918 54.9336 329.295 54.9156C329.028 54.9262 328.761 54.8835 328.509 54.79C328.258 54.6964 328.028 54.5539 327.832 54.3706C327.307 53.6692 326.921 52.8737 326.693 52.0267C324.633 46.6396 323.007 42.2972 321.814 38.9996C320.838 36.3832 319.899 33.8214 318.995 31.3141C318.091 28.8067 317.224 26.4084 316.393 24.1191H322.356C323.088 26.2994 323.901 28.6841 324.823 31.2868L327.669 39.2721C330.786 48.0659 332.232 52.2266 332.006 51.7542H332.602C333.036 50.5142 333.714 48.511 334.608 45.7584C335.503 43.0058 336.451 40.1578 337.427 37.2553C339.162 32.0227 340.626 27.6439 341.819 24.1191H347.619C347.05 25.8634 346.427 27.7302 345.749 29.7334C345.071 31.7365 344.394 33.8214 343.608 36.0017C342.559 39.0813 341.475 42.2609 340.355 45.5404C339.234 48.8199 338.096 52.0994 336.939 55.3789C336.147 57.6648 335.111 59.8579 333.849 61.9198C332.925 63.4345 331.627 64.6832 330.081 65.5445C328.369 66.3747 326.479 66.7678 324.579 66.6891V66.6891Z" fill="#F4F7F4"/>
                    <path d="M121.011 123.758H119.655H118.544C118.544 122.232 118.612 120.556 118.625 118.743C118.639 116.931 118.625 115.05 118.625 113.129C118.625 110.54 118.625 107.088 118.625 102.773C118.625 97.2403 118.553 90.4996 118.409 82.5506L124.318 82.0601C124.209 87.8651 124.155 92.8615 124.155 97.0495V102.2C124.155 105.716 124.155 109.3 124.155 112.938C124.155 116.577 124.236 119.874 124.264 122.859V123.785H121.011V123.758Z" fill="#F4F7F4"/>
                    <path d="M155.165 120.161C155.246 119.398 155.3 118.73 155.354 118.171C155.408 117.613 155.463 117.081 155.49 116.618L155.761 113.674H155.165C154.256 116.676 152.55 119.371 150.231 121.469C147.999 123.478 145.095 124.568 142.099 124.521C139.65 124.594 137.253 123.803 135.323 122.287C133.41 120.644 132 118.489 131.257 116.073C130.307 113.079 129.849 109.949 129.902 106.807C129.845 103.649 130.368 100.507 131.447 97.5404C132.328 95.0512 133.91 92.8734 136 91.2721C137.883 89.998 140.063 89.2399 142.326 89.0726C144.589 88.9053 146.856 89.3346 148.903 90.3182C150.602 91.1463 152.073 92.3817 153.186 93.9156C154.328 95.4604 155.064 97.2693 155.327 99.1756H155.869C155.693 97.1043 155.517 95.0875 155.327 93.1253L154.948 89.6368H161.019C161.019 90.7542 161.019 91.8716 161.019 92.9618C161.019 94.0519 161.019 95.1012 161.019 96.1232V100.429C161.019 102.31 161.019 104.149 161.019 105.88V111.739C161.019 114.901 161.074 118.898 161.182 123.731H155.273L155.165 120.161ZM144.593 120.161C146.887 120.192 149.117 119.4 150.882 117.926C152.819 116.25 154.31 114.114 155.219 111.712V104.79C155.273 102.685 154.788 100.601 153.809 98.7395C152.912 97.0649 151.594 95.6556 149.987 94.6515C148.559 93.7137 146.895 93.2033 145.189 93.1798C142.829 93.1565 140.539 93.9885 138.738 95.5236C137.651 96.9461 136.825 98.5519 136.299 100.266C135.706 102.393 135.432 104.598 135.485 106.807C135.496 108.861 135.779 110.905 136.326 112.884C136.84 114.84 137.827 116.637 139.199 118.117C139.91 118.831 140.763 119.387 141.701 119.748C142.64 120.11 143.644 120.269 144.647 120.215L144.593 120.161ZM137.545 84.3497V82.0059H155.381V84.3497H137.545Z" fill="#F4F7F4"/>
                    <path d="M173.434 132.097C172.306 132.105 171.179 131.995 170.073 131.77C169.063 131.561 168.067 131.288 167.091 130.953L167.688 126.156C169.206 126.292 170.846 126.415 172.594 126.51C174.342 126.606 175.982 126.66 177.5 126.701C178.083 125.747 178.598 124.848 179.045 123.976C179.496 123.125 179.903 122.252 180.265 121.359C180.482 120.842 180.672 120.351 180.834 119.888C180.997 119.424 181.187 118.934 181.403 118.416H180.915C180.607 118.942 180.203 119.404 179.723 119.779C179.221 120.15 178.611 120.342 177.988 120.324C177.72 120.334 177.453 120.292 177.202 120.198C176.951 120.105 176.72 119.962 176.524 119.779C176 119.077 175.614 118.282 175.386 117.435C173.326 112.048 171.699 107.705 170.507 104.408C169.531 101.791 168.591 99.2296 167.688 96.7223C166.784 94.215 165.917 91.8166 165.085 89.5273H171.049C171.781 91.7076 172.594 94.0923 173.515 96.695L176.362 104.68C179.479 113.474 180.924 117.635 180.699 117.162H181.295C181.729 115.922 182.406 113.919 183.301 111.167C184.195 108.414 185.144 105.566 186.12 102.664C187.855 97.4309 189.318 93.0521 190.511 89.5273H196.366C195.797 91.2716 195.173 93.1384 194.496 95.1416C193.818 97.1447 193.14 99.2296 192.354 101.41C191.315 104.49 190.231 107.669 189.102 110.949C187.972 114.228 186.834 117.508 185.686 120.787C184.894 123.073 183.858 125.266 182.596 127.328C181.672 128.843 180.374 130.091 178.828 130.953C177.148 131.765 175.298 132.158 173.434 132.097V132.097Z" fill="#F4F7F4"/>
                    <path d="M203.306 123.758H201.95H200.839C200.839 122.232 200.839 120.556 200.92 118.743C201.002 116.931 200.92 115.05 200.92 113.129C200.92 110.54 200.92 107.088 200.92 102.773C200.92 97.2403 200.848 90.4996 200.703 82.5506L206.613 82.0601C206.504 87.8651 206.45 92.8615 206.45 97.0495V102.2C206.45 105.716 206.45 109.3 206.45 112.938C206.45 116.577 206.667 119.915 206.667 122.831V123.758H203.306V123.758Z" fill="#F4F7F4"/>
                    <path d="M216.967 86.1485C215.957 86.2541 214.944 85.9825 214.121 85.3854C213.835 85.0489 213.619 84.6589 213.484 84.238C213.349 83.817 213.298 83.3733 213.335 82.9326C213.301 82.5313 213.357 82.1277 213.498 81.7507C213.638 81.3737 213.86 81.0327 214.148 80.7523C215.015 80.2871 215.984 80.0437 216.967 80.0437C217.95 80.0437 218.918 80.2871 219.786 80.7523C220.073 81.0327 220.295 81.3737 220.436 81.7507C220.576 82.1277 220.632 82.5313 220.599 82.9326C220.639 83.3735 220.589 83.818 220.454 84.2394C220.319 84.6608 220.101 85.0505 219.813 85.3854C218.992 85.9885 217.977 86.2607 216.967 86.1485V86.1485ZM214.039 123.758C214.193 117.79 214.265 112.412 214.256 107.624C214.256 101.483 214.184 95.4329 214.039 89.4734H214.798C215.137 89.5447 215.482 89.5813 215.828 89.5824H218.187C218.542 89.5827 218.896 89.5462 219.244 89.4734H219.949C219.84 95.3238 219.786 101.374 219.786 107.624C219.786 112.53 219.786 117.899 219.949 123.758H214.039Z" fill="#F4F7F4"/>
                    <path d="M239.845 124.413C236.348 124.59 232.892 123.582 230.032 121.551C227.516 119.541 225.803 116.687 225.207 113.511L230.466 113.021C231.117 115.127 232.383 116.988 234.098 118.362C235.985 119.681 238.254 120.333 240.55 120.216C241.853 120.223 243.153 120.086 244.426 119.807C245.512 119.573 246.574 119.235 247.597 118.798C248.06 118.027 248.407 117.191 248.627 116.318C248.875 115.403 249.002 114.46 249.007 113.511C249.052 112.456 248.736 111.417 248.112 110.568C247.328 109.679 246.3 109.044 245.158 108.742C243.304 108.175 241.396 107.81 239.465 107.652C236.756 107.375 234.089 106.771 231.523 105.853C229.916 105.311 228.521 104.271 227.539 102.882C226.731 101.467 226.336 99.8522 226.4 98.222C226.373 96.4138 226.988 94.6552 228.135 93.2619C229.421 91.7553 231.074 90.6097 232.933 89.937C235.196 89.0974 237.595 88.6907 240.007 88.7378C242.549 88.6909 245.074 89.1542 247.435 90.1005C249.429 90.9153 251.15 92.2864 252.395 94.0522C253.752 96.0996 254.632 98.4286 254.97 100.866L249.711 101.465C249.306 99.0556 248.159 96.8346 246.432 95.1151C244.497 93.6242 242.086 92.8971 239.655 93.0711C238.545 93.0706 237.437 93.1801 236.348 93.3981C235.425 93.5748 234.518 93.8301 233.637 94.1612C233.081 94.8378 232.658 95.6147 232.391 96.4505C232.105 97.3306 231.959 98.2502 231.957 99.1759C231.912 100.199 232.166 101.213 232.689 102.092C233.385 102.977 234.329 103.632 235.399 103.973C237.308 104.631 239.279 105.087 241.281 105.335C243.886 105.499 246.457 106.012 248.925 106.861C250.582 107.394 252.038 108.42 253.1 109.805C254.023 111.148 254.498 112.751 254.455 114.383C254.494 116.332 253.852 118.232 252.639 119.752C251.284 121.356 249.523 122.561 247.543 123.241C245.069 124.097 242.46 124.494 239.845 124.413Z" fill="#F4F7F4"/>
                    <path d="M272.481 124.248C270.266 124.42 268.056 123.855 266.192 122.64C264.762 121.497 263.775 119.887 263.4 118.089C262.893 115.559 262.648 112.984 262.669 110.403V93.7788L257.41 93.8878V89.5818H260.283H262.614V81.76H263.97C264.444 81.76 264.905 81.76 265.325 81.76C265.745 81.76 266.314 81.76 266.789 81.76C267.263 81.76 267.724 81.76 268.144 81.76V89.8271C270.421 89.8271 272.21 89.8271 273.565 89.8271H276.601C277.618 89.8271 278.621 89.8271 279.637 89.8271C279.637 89.9361 279.637 90.0451 279.637 90.1814C279.631 90.2994 279.631 90.4176 279.637 90.5356C279.617 90.7805 279.617 91.0266 279.637 91.2715V93.043C279.637 93.261 279.637 93.4654 279.637 93.6698C279.637 93.8742 279.637 94.0514 279.637 94.2421L268.307 94.0786C268.307 95.8501 268.307 97.7578 268.307 99.7746C268.307 101.791 268.307 103.863 268.307 105.907V112.12C268.214 114.136 268.537 116.15 269.255 118.034C269.582 118.728 270.115 119.302 270.78 119.678C271.445 120.053 272.21 120.213 272.969 120.133C274.077 120.135 275.183 120.044 276.276 119.86C277.304 119.679 278.319 119.424 279.312 119.097V121.114C279.312 121.55 279.244 121.973 279.23 122.395C279.203 122.785 279.203 123.177 279.23 123.567C277.022 124.102 274.751 124.331 272.481 124.248Z" fill="#F4F7F4"/>
                    <path d="M297.635 124.413C294.138 124.59 290.682 123.582 287.822 121.551C285.306 119.541 283.593 116.687 282.998 113.511L288.256 113.021C288.907 115.127 290.173 116.988 291.888 118.362C293.761 119.669 296.009 120.321 298.285 120.216C300.702 120.244 303.099 119.78 305.333 118.853C305.796 118.082 306.143 117.246 306.363 116.373C306.61 115.458 306.738 114.514 306.743 113.566C306.788 112.511 306.472 111.472 305.848 110.622C305.069 109.717 304.041 109.062 302.894 108.742C301.057 108.188 299.167 107.832 297.255 107.679C294.555 107.402 291.897 106.798 289.34 105.88C287.704 105.353 286.278 104.312 285.274 102.91C284.467 101.495 284.072 99.8794 284.136 98.2493C284.109 96.4411 284.724 94.6825 285.871 93.2891C287.156 91.7625 288.821 90.6057 290.696 89.937C292.959 89.0974 295.358 88.6907 297.77 88.7378C300.312 88.6909 302.837 89.1542 305.198 90.1005C307.192 90.9153 308.913 92.2864 310.158 94.0522C311.515 96.0996 312.395 98.4286 312.733 100.866L307.474 101.465C307.095 99.0428 305.966 96.802 304.249 95.0606C302.313 93.572 299.903 92.8451 297.472 93.0166C296.362 93.0154 295.254 93.125 294.165 93.3436C293.242 93.5203 292.335 93.7756 291.455 94.1067C290.898 94.7832 290.475 95.5602 290.208 96.396C289.922 97.2761 289.776 98.1957 289.774 99.1214C289.729 100.144 289.983 101.158 290.506 102.038C291.202 102.923 292.146 103.578 293.217 103.918C295.125 104.578 297.096 105.034 299.099 105.281C301.703 105.444 304.274 105.957 306.743 106.807C308.397 107.342 309.853 108.368 310.917 109.75C311.84 111.093 312.315 112.697 312.272 114.329C312.312 116.277 311.669 118.178 310.456 119.698C309.101 121.301 307.341 122.507 305.36 123.186C302.881 124.064 300.263 124.48 297.635 124.413Z" fill="#F4F7F4"/>
                    </svg>
                   
            </header>
            <div id="nav-icon" onClick={() => setMenuState(!menuActive)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={`overlay ${menuActive?"": "menuD"}`}>
                <div className={`Menu ${menuActive?"": "menuD"}`}>
                    <ul>
                        {
                            Console.map((menu,index)=>{
                            return(
                                <li key={index}><a href={menu.url}>{menu.title}</a></li>
                            )
                        })}
                        <li><button>SUBMIT YOUR STORY</button></li>
                        <div className="Social">
                <h1 style={{color:"white"}}>Connect with us</h1>
                <div id="social" className="socialDark">
                <a href="#"><span className="fab fa-facebook"></span></a>
                <a href="#"><span className="fab fa-twitter"></span></a>
                <a href="#"><span className="fab fa-instagram"></span></a>
                <a href="#"><span className="fab fa-youtube"></span></a>
                </div>
                </div>
                    </ul>
                 
                </div>
                
            </div>
        </div>
    )


}



function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
    });
  
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
        });
      }
      
      // Add event listener
      window.addEventListener("resize", handleResize);
      
      // Call handler right away so state gets updated with initial window size
      handleResize();
      
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
  
    return windowSize;
  }