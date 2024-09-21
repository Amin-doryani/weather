let apikey = "Key";
        let apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
        async function check() {
            let city = document.querySelector("input").value;
            const res = await fetch(apiurl + `&appid=${apikey}&q=${city}`)
            ress = await res.json()

            console.log(ress);
            document.querySelector(".city").innerHTML = ress.name;
            document.querySelector(".temp").innerHTML = Math.round(ress.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML = ress.main.humidity + " %";
            document.querySelector(".wind").innerHTML = ress.wind.speed + " Km/h";
            let img = ress.weather[0].main;
            let r = `images/${img}.png`;
            // document.querySelector(".errorms").style.display = "none";
            document.querySelector(".siteimg").src = r;
            document.querySelector(".div3").style.display = "flex";
            document.querySelector(".div2").style.display = "flex";
        }