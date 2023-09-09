

export const LoginIconsComponent = () => {

    return(
        <div className={"container-icons"}>
            <div className={"icons-vertical background-light"}>
                <img alt={"gitlab"} src={"/gitlab.png"} className={"icon"}/>
                <img alt={"github"} src={"/github.png"} className={"icon"}/>
            </div>
            <div className={"icons-horizontal background-light"}>
                <img alt={"android"} src={"/android.png"} className={"icon"}/>
                <img alt={"ios"} src={"/ios.png"} className={"icon"}/>
                <img alt={"windows"} src={"/windows.png"} className={"icon"}/>
            </div>
        </div>
    )
}