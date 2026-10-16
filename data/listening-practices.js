window.RRListeningPractices = (() => {
  const key = text => ({text, key: true});
  const locatorItems = [
    {
      id: 'loc-1',
      question: ['For', key('large parties,'), 'tables', 'must', key('be reserved'), '___', 'days', key('in advance.')],
      source: [key('Bigger groups'), 'usually', 'need', key('to book'), 'a table', 'five', 'days', key('before the visit.')],
      audio: 'audio/exercise2/loc-01.mp3',
      explanation: 'large parties 对应 bigger groups；be reserved 对应 to book；in advance 对应 before the visit。空格和 days 帮助判断答案形式，不是这次要标记的定位表达。'
    },
    {
      id: 'loc-2',
      question: ['The', key('deposit'), key('must be sent'), 'by a bank', '___', key('before the booking is confirmed.')],
      source: ['To', key('secure your reservation,'), key('send'), 'the', key('advance payment'), 'using', 'a bank transfer.'],
      audio: 'audio/exercise2/loc-02.mp3',
      explanation: 'deposit 对应 advance payment；must be sent 对应 send；确认订位在这里被改写成 secure your reservation。'
    },
    {
      id: 'loc-3',
      question: ['The', key('fixed-price lunch'), 'includes', 'a', '___', key('at no extra cost.')],
      source: ['With', 'the', key('lunchtime set menu,'), "you'll get", 'a soft drink', key('without paying anything more.')],
      audio: 'audio/exercise2/loc-03.mp3',
      explanation: 'fixed-price lunch 对应 lunchtime set menu；at no extra cost 对应 without paying anything more。先锁定套餐，再听它包含什么。'
    },
    {
      id: 'loc-4',
      question: ['People', key('who avoid dairy'), 'have', 'only', key('a small range'), 'of', '___', 'to choose from.'],
      source: ['If', key("you don't eat milk products,"), 'there are', key('very few'), 'desserts', 'on offer.'],
      audio: 'audio/exercise2/loc-04.mp3',
      explanation: 'avoid dairy 对应 don’t eat milk products；a small range 对应 very few。否定和数量限制都要听清。'
    },
    {
      id: 'loc-5',
      question: ['The', key('room on the upper floor'), 'can', key('be reserved'), 'for', key('private'), '___.'],
      source: ['You', 'can', 'usually', key('book'), key('the space above the main dining room'), key('exclusively'), 'for celebrations,', 'even', 'on a weekday.'],
      audio: 'audio/exercise2/loc-05.mp3',
      explanation: 'upper floor 对应 above the main dining room；be reserved 对应 book；private 对应 exclusively（专用、独享）。'
    },
    {
      id: 'loc-6',
      question: ['The cost', 'of', 'the', key('evening set menu'), 'is', '£___', key('for each diner.')],
      source: [key('Dinner'), 'works out at', 'twenty-eight pounds', key('a head,'), 'with', 'service', 'included.'],
      audio: 'audio/exercise2/loc-06.mp3',
      explanation: 'evening set menu 把注意力限定在晚餐；Dinner 指向同一个用餐时段。for each diner 对应 a head，价格按人计算。'
    },
    {
      id: 'loc-7',
      question: [key('Customer feedback'), 'says', 'the', key('portion size'), 'is', '___.'],
      source: ['People', key("who've eaten there"), 'say', key('the amount on each plate'), 'is', 'generous.'],
      audio: 'audio/exercise2/loc-07.mp3',
      explanation: 'Customer feedback 的来源被改成 who’ve eaten there 的人；portion size 对应 the amount on each plate。别只等同一个单词重现。'
    },
    {
      id: 'loc-8',
      question: ['The restaurant', key('gets'), 'its', key('vegetables'), 'from', 'a', '___', key('nearby.')],
      source: [key('Their greens'), 'normally', key('come from'), 'a farm', key('just outside the village,'), 'according to', 'the', 'manager.'],
      audio: 'audio/exercise2/loc-08.mp3',
      explanation: 'vegetables 对应 greens；gets … from 对应 come from；nearby 通过 just outside the village 表达。'
    },
    {
      id: 'loc-9',
      question: ['Tables', key('beside the window'), 'need', key('to be requested'), 'when', '___.'],
      source: ['If', "you'd like", key('a seat with a view,'), key('mention it'), 'while', 'you are booking.'],
      audio: 'audio/exercise2/loc-09.mp3',
      explanation: 'beside the window 和 a seat with a view 都指想要的座位；to be requested 对应 mention it。定位后，后面的时间信息才是填空内容。'
    },
    {
      id: 'loc-10',
      question: ['Bookings', key('cancelled'), key('less than a day ahead'), key('will incur'), 'a', '___.'],
      source: ['If', key('you pull out'), key('within twenty-four hours,'), key("you'll have to pay"), 'a cancellation fee.'],
      audio: 'audio/exercise2/loc-10.mp3',
      explanation: 'cancelled 对应 pull out；less than a day ahead 对应 within twenty-four hours；will incur 对应 have to pay。条件和结果都能帮助定位。'
    }
  ];
  const paraphraseItems = [
    {
      id: 'para-1', title: 'A meal with friends',
      segments: [
        'We chose a small bistro after work. The dining room felt ',
        {id:'p1-1', text:'informal', answer:'p1-a', explanation:'informal 在用餐场景中表示轻松、不拘礼节，对应 relaxed。'},
        ', so nobody worried about dressing up. The weekday lunch ',
        {id:'p1-2', text:'costs very little', answer:'p1-b', explanation:'costs very little（花钱少）可以浓缩成一个词 inexpensive。'},
        ', although the choice of starters is ',
        {id:'p1-3', text:'limited', answer:'p1-c', explanation:'limited 在这里限制可选范围，对应 there isn’t much to choose from。'},
        '. Even so, there is ',
        {id:'p1-4', text:'enough food to leave you full', answer:'p1-d', explanation:'描述“吃完能饱”的整句话，对应 substantial portions（份量足）。'},
        '. Larger groups must send ',
        {id:'p1-5', text:'a payment before their visit', answer:'p1-e', explanation:'预先支付以确认订位的一笔钱，可以用 deposit 表达。'},
        '. The final price is calculated ',
        {id:'p1-6', text:'per person', answer:'p1-f', explanation:'per person 和 a head 都表示“每人”。'},
        ', rather than for the whole table. We checked the booking conditions before inviting everyone.'
      ],
      choices: [
        {id:'p1-d',text:'substantial portions'}, {id:'p1-x1',text:'a special occasion'},
        {id:'p1-b',text:'inexpensive'}, {id:'p1-f',text:'a head'},
        {id:'p1-x2',text:'fresh produce'}, {id:'p1-a',text:'relaxed'},
        {id:'p1-e',text:'deposit'}, {id:'p1-x3',text:'refundable'},
        {id:'p1-c',text:"there isn't much to choose from"}
      ]
    },
    {
      id: 'para-2', title: 'Choosing somewhere to celebrate',
      segments: [
        'My colleague would ',
        {id:'p2-1',text:'recommend',answer:'p2-a',explanation:'在建议选餐厅时，recommend 和 suggest 表达相近的推荐意思。'},
        ' this restaurant for a ',
        {id:'p2-2',text:'special occasion',answer:'p2-b',explanation:'special occasion 可以展开为 an event worth celebrating。'},
        '. It is ',
        {id:'p2-3',text:'within walking distance',answer:'p2-c',explanation:'within walking distance 对应 close enough to reach on foot。'},
        ' of the theatre, which makes meeting up easy. The ',
        {id:'p2-4',text:'views',answer:'p2-d',explanation:'views 是窗外可见的景色，可展开为 what you can see from the windows。'},
        ' are the main attraction in the dining room. The chef explains where the ',
        {id:'p2-5',text:'ingredients',answer:'p2-e',explanation:'ingredients 是做菜用的食材，对应 the foods used to prepare a dish。'},
        ' come from, and several dishes are prepared ',
        {id:'p2-6',text:'without meat',answer:'p2-f',explanation:'without meat 可以压缩为 meat-free。注意词数不同不妨碍意思对应。'},
        '. We will ask about the menu before deciding which evening to go.'
      ],
      choices: [
        {id:'p2-x1',text:'table service'}, {id:'p2-d',text:'what you can see from the windows'},
        {id:'p2-a',text:'suggest'}, {id:'p2-f',text:'meat-free'},
        {id:'p2-x2',text:'the bill at the end'}, {id:'p2-b',text:'an event worth celebrating'},
        {id:'p2-e',text:'the foods used to prepare a dish'}, {id:'p2-x3',text:'fully booked'},
        {id:'p2-c',text:'close enough to reach on foot'}
      ]
    }
  ];
  const signalItems = [
    {
      id:'signal-1', title:'Planning a group lunch',
      focus:'留意订位要求、午餐费用和菜量的关键说明。',
      audio:'audio/exercise2/signal-01.mp3', tolerance:2,
      transcript:[
        'I visited that little bistro on Monday with a colleague from work.',
        'The entrance is beside a flower shop, and the dining room has pale wooden tables.',
        "The one thing to remember is that a booking isn't secure until the advance payment has arrived.",
        'They send a short email with the details, which you can keep on your phone.',
        "Actually, the lunchtime price includes a drink; the evening price doesn't.",
        'We sat near the front, where we could watch people walking past.',
        'As for the portions, most people find one main course more than enough.',
        'We were there for just over an hour.'
      ],
      cues:[
        {sentence:2,signal:'The one thing to remember',why:'提醒后紧接订位生效的条件；从这句开头开始关注。'},
        {sentence:4,signal:'Actually',why:'修正关于费用的理解：午餐和晚餐包含的内容不同。'},
        {sentence:6,signal:'As for the portions',why:'话题明确转到份量，后面的评价与这一栏相关。'}
      ]
    },
    {
      id:'signal-2',title:'Checking the dinner arrangements',
      focus:'留意可选菜品、座位要求和取消预订的关键说明。',
      audio:'audio/exercise2/signal-02.mp3', tolerance:2,
      transcript:[
        'I called the restaurant yesterday while I was on my way home.',
        'The woman who answered was friendly and took a moment to find our reservation.',
        'The only drawback is that guests who avoid dairy have very few desserts to choose from.',
        'There is a printed menu by the entrance, and the same information is on their website.',
        'More importantly, you need to request a window table when you first make the booking.',
        'The room faces a small garden with a path running through the middle.',
        'If you do need to cancel, tell them at least two days beforehand to avoid a charge.',
        'I wrote all the details down afterwards.'
      ],
      cues:[
        {sentence:2,signal:'The only drawback',why:'转入一个限制：避开乳制品的顾客可选甜点很少。'},
        {sentence:4,signal:'More importantly',why:'强调座位要求的处理时间，是需要抓住的预订细节。'},
        {sentence:6,signal:'If you do need to cancel',why:'条件句引出取消预订的期限和收费结果。'}
      ]
    }
  ];
  return {
    'c20-t1-p1-2': {
      id:'c20-t1-p1-2', title:'餐厅预订与推荐', label:'练习 2 · 定位与同义替换',
      location:{skill:'listening',book:20,test:1,part:1},
      coreWords:[
        ['large party','人数较多的聚餐团体'], ['in advance','提前'],
        ['secure a reservation','确保订位生效'], ['advance payment','预付款'],
        ['at no extra cost','不额外收费'], ['fixed-price lunch','定价午餐套餐'],
        ['limited','可选范围有限的'], ['a head','每人'],
        ['portion size','菜量'], ['substantial portions','份量足的菜'],
        ['pull out','取消参加或预订'], ['incur a charge','产生费用'],
        ['within walking distance','步行可达'], ['informal','轻松、不拘礼节的'],
        ['drawback','不足之处'], ['as for','至于'],
        ['actually','其实；用于修正先前信息'], ['more importantly','更重要的是']
      ],
      sections:[
        {id:'locators',type:'locator',title:'定位词标记',instruction:'只标记定位表达，不填写空格。点击加下划线，再点取消；每句的可标记数量有限。',items:locatorItems},
        {id:'paraphrases',type:'paraphrase',title:'同义替换',instruction:'将下方表达拖入对应空格，每段多出 3 项。已填表达可拖回词库或移到其他空格；也可以点选操作。',items:paraphraseItems},
        {id:'signals',type:'signal',title:'信号词捕捉',instruction:'听到提醒、修正或话题转向等信号，立即标记考点句的起点。每段有 3 处，重听会清空标记。',items:signalItems}
      ]
    }
  };
})();
