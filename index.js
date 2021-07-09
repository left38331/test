const data = {
    "names": ["Пепперони", "Деревенская", "Гавайская", "Грибная"],
    "sizes": ["21", "26", "31", "45"],
    "prices": {
        "21": "20р",
        "26": "30р",
        "31": "36р",
        "45": "45р"
    },
    "sauces": ["сырный", "кисло-сладкий", "чесночный", "барбекю"]
}


$(function () {

    for (let i = 0; i < data.names.length; i++) {
        $(".pizza_order__pizza_name").append(
            $("<option>", {value : data.names[i]}).text(data.names[i])
        )
    }

    for (let i = 0; i < data.sizes.length; i++) {
        $(".pizza_order__pizza_size").append(
            $("<option>", {value : data.sizes[i]}).text(data.sizes[i] + "см")
        )
    }

    for (let i = 0; i < data.sauces.length; i++) {
        $(".pizza_order__pizza_sauce").append(
            $("<option>", {value : data.sauces[i]}).text(data.sauces[i])
        )
    }

    let order = {};
    $(".pizza_order").change(function () {

        if ($(".pizza_order__pizza_name option:selected").attr("value") !== "0") {
            order.name = $(".pizza_order__pizza_name option:selected").attr("value")
            $(".pizza_order__pizza_name option[value='0']").remove()
            $(".pizza_order__pizza_size").removeAttr("disabled")
        }

        if($(".pizza_order__pizza_size option:selected").attr("value") !== "0") {
            order.size = $(".pizza_order__pizza_size option:selected").attr("value")
            order.price = data.prices[order.size]
            $(".pizza_order__pizza_size option[value='0']").remove()
            $(".pizza_order__pizza_sauce").removeAttr("disabled")
        }

        if($(".pizza_order__pizza_sauce option:selected").attr("value") !== "0") {
            order.sauсe = $(".pizza_order__pizza_sauce option:selected").attr("value")
            $(".pizza_order__pizza_sauce option[value='0']").remove()
            $(".pizza_order__btn").removeAttr("disabled")
        }
    })

    $(".pizza_order__btn").click(function (event) {
        event.preventDefault()

        let check = $("<div>", { class : "check"}).html(
            "<h3>Чек</h3> <p>Вы заказали пиццу: "+order.name+"</p> <p>Размер: "+order.size+"см</p> <p>С соусом: "
            +order.sauсe+"</p> <p>Цена - "+order.price+"</p> <button class='check_close' type='submit'>Ок</button>")
        $(".pizza_order").append(check)

        $(".check_close").click(function () {
            $(".check").remove()
            // $(".pizza_order").submit()
        })
    })



})