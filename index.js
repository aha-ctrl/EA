class Product {
    constructor(img,name,company,price,total){price
        self.name = name
        self.price = price
        self.company = company
        self.total = total
        self.img = img
    }
    getData () {
        return {
            img: self.img,
            name: self.name,
            price: self.price,
            company: self.company,
            total: self.total
        }
    }
}



const data =
[
    new Product("https://bayram.uz/wp-content/uploads/2024/02/35.webp","электрогитара AM PERF STRAT MN SATIN LBP" , 2850000000,"Yamaha", 1000 ),
    new Product("https://bayram.uz/wp-content/uploads/2024/02/26.webp","Электрогитара PNML SUPER SONIC LRL WPPG GRM" , 828000000, "Yamaha",228),
    new Product("https://bayram.uz/wp-content/uploads/2024/02/30.webp","Электрогитара G5655TG EMTC CB JR SNGBRL BRST" , 173000000,"Yamaha",514),
    new Product("https://bayram.uz/wp-content/uploads/2024/02/39.jpeg","Электрогитара LTD AM PERF STRAT MN OWT" , 2830000000,"Yamaha",5),

]

var html = ""

const mapData = (data) => {
    const getter = data.getData()
    window.html += `<div class="card">
        <img src="${getter.img }">
        <h1>${getter.name}</h1>
        <h3>${getter.company}</h3>
        <h4>${getter.price}</h4>
        <h5>${getter.total}</h5>
</div>
    `
}

data.map(mapData)


document.body.innerHTML = html 