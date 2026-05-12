ServerEvents.recipes(event => {

    //Functions
    function altar(output, input, blood, consrate, drainrate, level){event.custom({"type": "bloodmagic:altar","altarSyphon": blood,"consumptionRate": consrate,"drainRate": drainrate,"input": {"item": input},"output": {"item": output},"upgradeLevel": level-1})}

    //Blood Orbs
    event.remove({id:/bloodmagic:altar\/.+bloodorb/})
    altar('bloodmagic:weakbloodorb', 'evilcraft:blood_orb_filled', 4000, 10, 2, 1)

    //Plant Oil
    event.remove({id:/bloodmagic:alchemytable\/plantoil_from_/})
    event.custom({
        "type": "farmersdelight:cooking",
        "container": {
            "item": "minecraft:glass_bottle"
        },
        "cookingtime": 200,
        "experience": 1.0,
        "ingredients": [
            {
                "tag": "forge:vegetables"
            },
            {
                "tag": "forge:vegetables"
            },
            {
                "tag": "forge:vegetables"
            },
            {
                "item": "minecraft:bone_meal"
            }
        ],
        "recipe_book_tab": "misc",
        "result": {
            "item": "bloodmagic:plantoil"
        }
    })

})