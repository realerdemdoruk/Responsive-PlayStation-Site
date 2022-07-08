let menuList = document.getElementById("menuList");
        let col2 = document.querySelector(".col-2")

        menuList.style.maxHeight = "0px";

        function togglemenu() {

            if(menuList.style.maxHeight == "0px")
            {
                menuList.style.maxHeight = "130px";
                col2.style.marginTop = "5rem"
                col2.style.transition = "0.5s"
            } 
            else
            {
                menuList.style.maxHeight = "0px";
                col2.style.marginTop = "0rem"
            }
        }