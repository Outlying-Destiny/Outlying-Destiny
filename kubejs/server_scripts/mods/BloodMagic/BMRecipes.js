ServerEvents.recipes(event => {

    //Functions
    function altar(output, input, blood, consrate, drainrate, level){event.custom({"type": "bloodmagic:altar","altarSyphon": blood,"consumptionRate": consrate,"drainRate": drainrate,"input": {"item": input},"output": {"item": output},"upgradeLevel": level-1})}

    //Blood Orbs
    event.remove({id:/bloodmagic:altar\/.+bloodorb/})
    altar('bloodmagic:weakbloodorb', 'evilcraft:blood_orb_filled', 4000, 10, 2, 1)

})