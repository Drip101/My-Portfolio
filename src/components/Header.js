export default function Header() {

    function changeMenu(e) {
        const m = document.querySelector('header')
        const n = document.querySelectorAll('nav a')
        console.log(e)
        let p = e

        if (e && e.nodeName !== "DIV") {
            if (e.nodeName !== "A") p = e.closest("a")
            n.forEach(o => o.classList.remove('active'))
            p.classList.add('active')
            console.log(p)
        }


    }
    return (
        <header>
            <div className="menu" tabIndex={1} onClick={(event) => changeMenu(event)}>
                <span />
                <span />
                <span />
            </div>
            <nav id="navBar">
                <a className="active" onClick={(event) => changeMenu(event)}>
                    <span>
                        <img src="./home.svg" alt="" />
                    </span>
                    <button>home</button>
                </a>
                <a href="#bio" onClick={(event) => changeMenu(event)}>
                    {" "}
                    <span>
                        <img src="./images/user.png" alt="" />
                    </span>
                    <button>My Bio</button>
                </a>
                <a href="#MyWork" onClick={(event) => changeMenu(event)}>
                    {" "}
                    <span>
                        <img src="./images/mywork.png" />{" "}
                    </span>
                    <button>My Work</button>
                </a>
                <a href="#ContactMe" onClick={(event) => changeMenu(event)}>
                    <span>
                        <img src="./images/contactme.png" alt="" />
                    </span>{" "}
                    <button>Contact Me </button>
                </a>
            </nav>
        </header>

    )
}