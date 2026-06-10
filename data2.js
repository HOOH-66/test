// Q7-Q12
const QUESTIONS_PART2 = [
{
  label:{zh:'Q7 | 暧昧→危险',en:'Q7 | Flirting Level'},
  text:{zh:'你今天想撩他到什么程度？',en:'How far do you want to tease him today?'},
  type:'slider',
  left:{zh:'只是想看他脸红',en:'Just want to see him blush'},
  right:{zh:'想看他彻底绷不住',en:'Want to see him lose control'}
},
{
  label:{zh:'Q8 | 大胆·忍耐',en:'Q8 | Endurance'},
  text:{zh:'你坐他腿上看手机，一直找不到舒服的位置不停地挪。他突然掐住你的腰——',en:'You sit on his lap scrolling your phone, keep shifting. He suddenly grips your waist—'},
  type:'choice',
  options:[
    {zh:'"——别动了。"从牙缝挤出来的。你故意又蹭了一下，他额头撞上你后背闷在那里。"……你再磨一下试试"',en:'"Stop moving." Through gritted teeth. You shift again—his forehead drops to your back. "Try that again"',s:'restrained'},
    {zh:'手指一根根扣上来，从腰到胯。你转头看他脸，他猛偏开。脖子到耳朵全烫了。"下去。""为什么？""你别问了行不行"',en:'Fingers grip from waist to hip. You turn—he looks away. Neck to ears burning. "Get off." "Why?" "Just don\'t ask"',s:'restrained'},
    {zh:'一个用力你被翻过来面对面。他扣你后颈压你腰把你固定住。鼻尖对鼻尖在笑。"动够了没？"拇指往下蹭了一点。"该我了"',en:'Flips you face-to-face. Holds your neck and waist. Nose to nose, smiling. "Done moving?" Thumb slides down. "My turn"',s:'dominant'},
    {zh:'把你整个人箍住。你挣了一下，他在耳边说"不要走"。声音轻得像哄但身体是认真的。"就这样。坐着。不许走不许看手机。看我"',en:'Locks you in completely. "Don\'t go." Voice soft but body serious. "Stay. No phone. Look at me"',s:'yandere'}
  ]
},
{
  label:{zh:'Q9 | 虐·冷战破冰',en:'Q9 | Breaking the Ice'},
  text:{zh:'冷战第三天。你先到家了。推开门灯是黑的——他坐在沙发上，黑暗里就一个轮廓。',en:'Day 3 of silence. You come home. Lights off—his silhouette on the sofa in the dark.'},
  type:'choice',
  options:[
    {zh:'开灯看清他的脸——眼底发青，好几天没睡的样子。嘴张了一下什么都没说出来。过了很久嗓子哑着说："……锅里给你留了粥。还热着"',en:'Lights on—dark circles. Mouth opens then closes. Long silence. Hoarse: "There\'s porridge on the stove. Still warm"',s:'restrained'},
    {zh:'他看到你弹起来又坐回去。你蹲到他面前叫他名字。他嘴唇抖了一下。一把把你薅进怀里箍死。闷在头发里带哭腔："你再晚回来十分钟我就出去找你了"',en:'He jolts then sits back. You kneel before him. His lip trembles. Pulls you in tight. Muffled crying: "Ten more minutes and I would\'ve gone looking for you"',s:'clingy'},
    {zh:'黑暗里有烟头的亮点。他平时不抽。开灯他没动，仰头看天花板。"回来了。"茶几上散着空烟盒和手机——屏幕停在你俩聊天记录最后那句狠话',en:'Cigarette glow in dark. He never smokes. Lights on, doesn\'t move. "Back." Ashtray and phone showing your last cruel message',s:'dominant'},
    {zh:'灯还没亮他就站起来了。你后背撞到门板——他整个人压过来，手捧着你的脸。"三天。"嗓子哑。拇指擦过你嘴唇。"不许了。不管怎么吵都不许走。你再跑一次试试"',en:'Before lights come on he\'s up. Your back hits the door. Cups your face. "Three days." Hoarse. Thumb on your lips. "Never again. Run again and see what happens"',s:'yandere'}
  ]
},
{
  label:{zh:'Q10 | 暧昧·打电话',en:'Q10 | Video Call'},
  text:{zh:'你们分开了一段时间，晚上打视频。他困得不行但死活不挂。你说你睡吧——',en:'Apart for a while. Video call at night. He\'s exhausted but won\'t hang up. You say go to sleep—'},
  type:'choice',
  options:[
    {zh:'"嗯。"没挂。把手机靠枕头上歪头看你，眼皮打架但不闭。你准备断——他突然睁开："别挂。你就放着。听你就行"',en:'"Mm." Doesn\'t hang up. Phone on pillow, fighting sleep. You reach to end call—"Don\'t. Just leave it on. Hearing you is enough"',s:'restrained'},
    {zh:'开始耍赖。"不挂。你说想我了我就睡。"做可怜表情。你说了"想你了"。他嘿嘿笑然后正经了："真的？再说一遍。我录下来"',en:'Whines. "Say you miss me and I\'ll sleep." You say it. He grins then gets serious: "Really? Say it again. I\'m recording"',s:'clingy'},
    {zh:'镜头翻到天花板。"别看了。""为什么？""你……穿成那样跟我视频。"呼吸离话筒很近。"你到底知不知道你穿的什么"',en:'Camera flips to ceiling. "Stop looking." "Why?" "You\'re...wearing that on video." Breathing close to mic. "Do you even know what you\'re wearing"',s:'dominant'},
    {zh:'沉默了一会突然问："今天谁送你回家的。"你说没人。又问"朋友圈那张照片旁边那个是谁"。过一会发来消息：「周五请假了。过去陪你」',en:'Sudden: "Who walked you home today." No one. "Who\'s that in your photo?" Message later: "Taking Friday off. Coming to you"',s:'yandere'}
  ]
},
{
  label:{zh:'Q11 | 最大胆·深夜',en:'Q11 | Late Night'},
  text:{zh:'半夜被热醒了。他从后面搂着你——体温高得不正常。你动了一下才发现他根本没睡——',en:'Woken by heat. He holds you from behind—abnormally warm. You realize he\'s wide awake—'},
  type:'choice',
  options:[
    {zh:'你翻身碰到他了。他猛地绷紧攥住你手腕把你手挪开。"别动。"声音压得很低在颤。额头全是汗。你又动了。"——我在忍。你别逼我"',en:'You accidentally touch him. He tenses, moves your hand away. "Don\'t move." Voice low and shaking. "I\'m holding back. Don\'t push me"',s:'restrained'},
    {zh:'他假装睡着，但嘴唇从肩膀到脖子到耳后蹭着亲。你说别装了。他睁开眼水汪汪看着你："是你先蹭我的……"',en:'Pretends to sleep but kisses from shoulder to neck. You call him out. Opens dewy eyes: "You started it..."',s:'clingy'},
    {zh:'你一动他就翻过来罩住你。黑暗里眼睛很亮带着笑。手从T恤下摆滑进去覆在小腹上。"本来想等你醒的。算了，等不了了"',en:'Rolls over you instantly. Eyes bright in the dark. Hand slides under your shirt. "Was gonna wait. Can\'t anymore"',s:'dominant'},
    {zh:'你想翻身他不让。手臂箍腰腿压住你。鼻息打在后颈很重。"不许转过来。""为什么。""因为——你转过来的话。我就不只是抱着你了"',en:'"Don\'t turn around." "Why?" "Because—if you turn around. I won\'t just be holding you anymore"',s:'yandere'}
  ]
},
{
  label:{zh:'Q12 | 命运·翻牌',en:'Q12 | Fate Card'},
  text:{zh:'梦快醒了。最后一个画面——他在做什么。',en:'The dream is ending. One last image—what is he doing.'},
  type:'flip',
  cards:[
    {zh:'他站在原地没动。隔了几步远那个距离你走不过去。他看着你笑了一下——那个笑让你心口闷得发疼。转身走了。没回头。你想喊他名字但没有声音——然后醒了。枕头上有一小片湿的',en:'Standing still, a few steps away you can\'t cross. He smiles—it aches. Turns and walks away. You try to call his name but no sound. You wake. Pillow is damp',s:'restrained'},
    {zh:'他跑过来了。跑得很急踉跄了一下。整个人撞进你怀里箍着后背。脸埋在头顶吸鼻子。"下次做梦的时候——来找我。一定要来"',en:'He runs to you, stumbles. Crashes into your arms. Face in your hair, sniffling. "Next time you dream—find me. Promise"',s:'clingy'},
    {zh:'他站在很远的地方。路灯把影子拉得很长。看不清表情但你知道他在看你。你走了很远回头——他还在。手插口袋，领子被风吹起来，就一个人站着',en:'Far away under streetlight. Shadow stretches long. You walk away, look back—still there. Hands in pockets, collar in wind, standing alone',s:'dominant'},
    {zh:'你手腕被攥住了。他红着眼睛看你。"不准走。"用力到手腕发白。你说要醒了。他摇头。"不管。说好了你是我的——醒了也是。哪也不给。谁来接你都不行"',en:'Grabs your wrist. Red eyes. "Don\'t go." Grip turning wrist white. "I don\'t care. You\'re mine—awake or dreaming. Not giving you to anyone"',s:'yandere'}
  ]
}
];
