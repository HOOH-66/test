const QUESTIONS = [
{
  label:{zh:'Q1 | 早晨·日常甜',en:'Q1 | Morning'},
  text:{zh:'你赖床不想起来，他已经换好衣服准备出门了。路过床边低头看了你一眼——',en:'You don\'t want to get up. He passes by the bed and looks down at you—'},
  type:'choice',
  options:[
    {zh:'没叫你。弯腰把被角掖回去，手指在你后脑勺揉了一把。醒来发现床头放了杯温水，下面压着纸条：「起来喝水」',en:'Doesn\'t wake you. Tucks blanket, ruffles hair. You find warm water with a note: "Drink water"',s:'restrained'},
    {zh:'直接掀你被子。翻身时睡裙带子滑下来——他手停住，眼神飘了一瞬弹回去。被子甩回你身上，门摔得有点响。耳朵尖是红的',en:'Pulls blanket off. Your strap slips—his hand freezes, looks away. Throws blanket back. Door slams. Ears red',s:'restrained'},
    {zh:'直接趴你旁边，鼻尖蹭脸颊。"宝宝……起来嘛……"你推他他不走，手从被子底下搂你的腰。"不起来就不起来呗，那我也不走了"',en:'Flops beside you, nuzzles cheek. "Baby...get up..." Clings tight. "Then I\'m not leaving either"',s:'clingy'},
    {zh:'在床边坐了很久看你。你无意识抓住他衬衫角不撒手。他把你手指一根根掰开，低头亲了一下指尖，然后才走了',en:'Sits watching you. You grab his shirt. He peels your fingers off, kisses fingertips, then leaves',s:'yandere'}
  ]
},
{
  label:{zh:'Q2 | 暧昧·距离',en:'Q2 | Tension'},
  text:{zh:'你帮他整理衣领，手指碰到他脖子了。两个人的脸突然只剩几厘米——',en:'You fix his collar, fingers touch his neck. Faces suddenly centimeters apart—'},
  type:'choice',
  options:[
    {zh:'他没动。下颌线绷起来，喉结滚了一下。呼吸浅了但不退。你弄完抬头——他一直在看你嘴唇。你后退半步他才别开眼',en:'Doesn\'t move. Jaw tenses, Adam\'s apple bobs. Keeps staring at your lips until you step back',s:'restrained'},
    {zh:'歪头凑过来，鼻尖差点怼上。"呀，你手好凉。"完全没有要拉开距离的意思。你手抖了他嘿嘿笑："紧张啦？我又不咬你"',en:'Leans in, noses almost touching. "Your hands are cold." Grins when you tremble. "Nervous? I won\'t bite"',s:'clingy'},
    {zh:'你还没弄完他就按住你手，扣在领口上。声音懒懒的："弄完了？那手放这干嘛。"你想抽回来他反而扣紧，拇指压着你指根慢慢蹭',en:'Presses your hand against his collar. "Done? Then why is your hand still here." Holds tighter, thumb rubbing your knuckle',s:'dominant'},
    {zh:'你碰到他脖子那一下他呼吸变了。手扣住你手腕不让收回。"你知道你在碰哪吗。"声音很轻——你掌心下是他动脉在跳',en:'His breathing changes. Grabs your wrist. "Do you know where you\'re touching." Your palm feels his pulse racing',s:'yandere'}
  ]
},
{
  label:{zh:'Q3 | 穿衣·日常甜',en:'Q3 | Getting Dressed'},
  text:{zh:'今天穿了条新裙子，出门前转了一圈问他好看吗——',en:'You wear a new dress and spin around asking if it looks good—'},
  type:'choice',
  options:[
    {zh:'看了你两眼说"行"，低头穿鞋。出门后一直走外侧，你裙子被风吹起来时他手已经搭在你后腰了。嘴上不说',en:'"Fine." But outside he walks on the traffic side, hand already on your waist when wind blows your skirt',s:'restrained'},
    {zh:'蹲下来捏着裙摆往下拽。"这也太短了。"站起来手搁在裙摆位置拢着。嘴上说"走吧"',en:'Crouches down, tugs hem. "Too short." Stands up, hand guarding skirt edge. "Let\'s go"',s:'dominant'},
    {zh:'笑着说好看。你转身拿包——被从后面搂回来了。下巴搁肩膀上贴着耳朵："好看。太好看了。所以不出门了好不好。"手臂收得死紧',en:'"Pretty!" You turn—he pulls you back. Chin on shoulder: "Too pretty. Let\'s not go out." Arms locked tight',s:'clingy'},
    {zh:'没接话。走过来手指捏着你吊带往肩膀上提了提。"披个外套。"出门后只要有人多看你一眼他脸就冷下来了',en:'Says nothing. Adjusts your strap. "Wear a jacket." His face goes cold whenever anyone looks at you',s:'yandere'}
  ]
},
{
  label:{zh:'Q4 | 大胆·洗完澡',en:'Q4 | After Shower'},
  text:{zh:'你刚洗完澡出来，穿着他那件宽T恤，底下真空。头发滴着水——',en:'You come out of the shower in his oversized tee, nothing underneath. Hair dripping—'},
  type:'choice',
  options:[
    {zh:'他在沙发上。眼神黏在那滴水上跟了一路然后突然转开。你喊他吹头发，他手慢下来，指腹沿着你后颈抿过去。叫他名字，过了好几秒才闷闷"嗯"了一声',en:'Eyes follow a water drop then snap away. Dries your hair, fingers slow on your neck. Takes seconds to respond when you call his name',s:'restrained'},
    {zh:'大步过来毛巾往你头上一盖开始搓。"说了多少次不擦干就跑出来。"擦到锁骨动作慢了。你说自己来，他手没停。"……转过去。"',en:'Wraps towel on your head. "How many times—dry off first." Slows at collarbone. "Turn around."',s:'dominant'},
    {zh:'从沙发站起来走过来拦在你面前。你退一步后背碰墙。他两手撑墙俯下来，视线跟着水痕往下走。笑了。"头发都不吹就出来了……这么急着见我？"',en:'Blocks your path, hands on wall above you. Follows water trail down. Smiles. "Hair not even dry...that eager to see me?"',s:'dominant'},
    {zh:'从背后整个人裹住你，连人带浴巾箍在怀里。脸埋在湿头发里深吸一口。你说放开。他不松反紧。"不行。你这样子不能让别人看到。谁都不行"',en:'Wraps you from behind, face buried in wet hair. You say let go. He holds tighter. "No. No one else can see you like this"',s:'yandere'}
  ]
},
{
  label:{zh:'Q5 | 虐·吃醋',en:'Q5 | Jealousy'},
  text:{zh:'他看到你和一个男的走在一起笑得很开心。回来一整晚没怎么说话。你凑过去问怎么了——',en:'He saw you walking happily with another guy. Silent all evening. You ask what\'s wrong—'},
  type:'choice',
  options:[
    {zh:'"没怎么。"半夜被箍醒——他从后面搂着你太紧喘不上气。嘴唇贴着后颈，你分不清是在亲还是贴着。好像在说什么，脖子上感觉到湿的',en:'"Nothing." Wakes you at night—arms too tight, lips on your neck. Something wet on your skin',s:'restrained'},
    {zh:'安静了很久。转过来时眼睛红了。"你笑得……比跟我在一起时开心。"声音越说越小。把头塞你脖子里不肯出来。你肩窝洇湿了',en:'Long silence. Turns with red eyes. "You looked...happier than with me." Buries face in your neck. Shoulder dampens',s:'clingy'},
    {zh:'"哦。"盯着手机但没在看。"那个人叫什么。"你说同事。他笑了一下——让你后背发凉的笑。"同事啊。那你跟我也是同事对吧。你跟谁都那样笑"',en:'"Oh." Stares at phone. "What\'s his name." You say colleague. His smile sends chills. "So we\'re colleagues too? You smile like that for everyone?"',s:'dominant'},
    {zh:'你刚问完他就站起来逼过来。你被退到冰箱门上。他手撑在你耳边俯下来。"那个人。碰你了吗。"然后咬了你耳垂，疼的那种。"你的笑，别给别人看"',en:'Backs you against the fridge. "Did he touch you." Bites your earlobe—hard. "Your smile. Don\'t show it to others"',s:'yandere'}
  ]
},
{
  label:{zh:'Q6 | 日常甜·逛街',en:'Q6 | Shopping'},
  text:{zh:'逛超市，你蹲下去看最底层货架。裙子有点短。他站你后面——',en:'At the supermarket, you squat to check bottom shelf. Skirt a bit short. He stands behind—'},
  type:'choice',
  options:[
    {zh:'你站起来发现他外套解下来挂手臂上挡在你身后。你说不冷啊。他"嗯"了一声推车走了。后脖子有点红',en:'His jacket is off, blocking the view behind you. "Not cold." He pushes the cart away. Back of neck red',s:'restrained'},
    {zh:'也蹲下来，手很自然搭在你膝盖上把裙边压住。不看你，盯着货架问"这个要不要买"，语气特别随便',en:'Squats too, hand casually on your knee pressing skirt down. "Want this?" Acts totally casual',s:'dominant'},
    {zh:'从后面弯腰一捞把你提起来。"蹲那么久腿不麻？"但他捞你时顺手把你后面领口拉好了。什么也没说',en:'Scoops you up from behind. "Legs numb?" Quietly fixed your collar that had slipped',s:'clingy'},
    {zh:'站你正后方一步不动。你起来时他揽了一下腰又松了。微微低头靠近耳朵："下次穿长一点的"，腰侧掐了一把',en:'Stands right behind, motionless. When you rise, brief hand on waist. Whispers: "Wear something longer next time." Pinches your side',s:'yandere'}
  ]
}
];
