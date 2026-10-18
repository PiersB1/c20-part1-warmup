RRListenPack({
  "test": 4,
  "part": 2,
  "title": "城市艺术街区与步行导览",
  "focus": "居民增长与现有规模、街巷手工艺、设计灵感和材料、停车优惠、方位与相邻地点。",
  "formats": [
    [
      "单选题干",
      4
    ],
    [
      "地图标注",
      6
    ]
  ],
  "map": {
    "caption": "Arts quarter paths",
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 560 465\" role=\"img\" aria-label=\"Arts quarter paths\"><rect width=\"560\" height=\"465\" rx=\"12\" fill=\"#eef3e8\"/><text x=\"515\" y=\"28\" font-size=\"17\">N ↑</text><line x1=\"100\" y1=\"75\" x2=\"280\" y2=\"75\" stroke=\"#bdcdbf\" stroke-width=\"12\"/><line x1=\"280\" y1=\"75\" x2=\"460\" y2=\"75\" stroke=\"#bdcdbf\" stroke-width=\"12\"/><line x1=\"100\" y1=\"235\" x2=\"280\" y2=\"235\" stroke=\"#bdcdbf\" stroke-width=\"12\"/><line x1=\"280\" y1=\"235\" x2=\"460\" y2=\"235\" stroke=\"#bdcdbf\" stroke-width=\"12\"/><line x1=\"100\" y1=\"395\" x2=\"280\" y2=\"395\" stroke=\"#bdcdbf\" stroke-width=\"12\"/><line x1=\"280\" y1=\"395\" x2=\"460\" y2=\"395\" stroke=\"#bdcdbf\" stroke-width=\"12\"/><line x1=\"100\" y1=\"75\" x2=\"100\" y2=\"235\" stroke=\"#bdcdbf\" stroke-width=\"12\"/><line x1=\"100\" y1=\"235\" x2=\"100\" y2=\"395\" stroke=\"#bdcdbf\" stroke-width=\"12\"/><line x1=\"280\" y1=\"75\" x2=\"280\" y2=\"235\" stroke=\"#bdcdbf\" stroke-width=\"12\"/><line x1=\"280\" y1=\"235\" x2=\"280\" y2=\"395\" stroke=\"#bdcdbf\" stroke-width=\"12\"/><line x1=\"460\" y1=\"75\" x2=\"460\" y2=\"235\" stroke=\"#bdcdbf\" stroke-width=\"12\"/><line x1=\"460\" y1=\"235\" x2=\"460\" y2=\"395\" stroke=\"#bdcdbf\" stroke-width=\"12\"/><circle cx=\"100\" cy=\"75\" r=\"7\" fill=\"#315d50\"/><rect x=\"23\" y=\"87\" width=\"154\" height=\"27\" rx=\"4\" fill=\"#fffdf7\"/><text x=\"100\" y=\"105\" text-anchor=\"middle\" font-size=\"14\">Pottery workshop</text><circle cx=\"280\" cy=\"75\" r=\"7\" fill=\"#315d50\"/><rect x=\"203\" y=\"87\" width=\"154\" height=\"27\" rx=\"4\" fill=\"#fffdf7\"/><text x=\"280\" y=\"105\" text-anchor=\"middle\" font-size=\"14\">Herb garden</text><circle cx=\"460\" cy=\"75\" r=\"7\" fill=\"#315d50\"/><rect x=\"383\" y=\"87\" width=\"154\" height=\"27\" rx=\"4\" fill=\"#fffdf7\"/><text x=\"460\" y=\"105\" text-anchor=\"middle\" font-size=\"14\">Bookshop</text><circle cx=\"100\" cy=\"235\" r=\"7\" fill=\"#315d50\"/><rect x=\"23\" y=\"247\" width=\"154\" height=\"27\" rx=\"4\" fill=\"#fffdf7\"/><text x=\"100\" y=\"265\" text-anchor=\"middle\" font-size=\"14\">Fountain</text><circle cx=\"280\" cy=\"235\" r=\"7\" fill=\"#315d50\"/><rect x=\"203\" y=\"247\" width=\"154\" height=\"27\" rx=\"4\" fill=\"#fffdf7\"/><text x=\"280\" y=\"265\" text-anchor=\"middle\" font-size=\"14\">Crossing</text><circle cx=\"460\" cy=\"235\" r=\"7\" fill=\"#315d50\"/><rect x=\"383\" y=\"247\" width=\"154\" height=\"27\" rx=\"4\" fill=\"#fffdf7\"/><text x=\"460\" y=\"265\" text-anchor=\"middle\" font-size=\"14\">Print studio</text><circle cx=\"100\" cy=\"395\" r=\"7\" fill=\"#315d50\"/><rect x=\"23\" y=\"407\" width=\"154\" height=\"27\" rx=\"4\" fill=\"#fffdf7\"/><text x=\"100\" y=\"425\" text-anchor=\"middle\" font-size=\"14\">South gate</text><circle cx=\"280\" cy=\"395\" r=\"7\" fill=\"#315d50\"/><rect x=\"203\" y=\"407\" width=\"154\" height=\"27\" rx=\"4\" fill=\"#fffdf7\"/><text x=\"280\" y=\"425\" text-anchor=\"middle\" font-size=\"14\">Market entrance</text><circle cx=\"460\" cy=\"395\" r=\"7\" fill=\"#315d50\"/><rect x=\"383\" y=\"407\" width=\"154\" height=\"27\" rx=\"4\" fill=\"#fffdf7\"/><text x=\"460\" y=\"425\" text-anchor=\"middle\" font-size=\"14\">Courtyard café</text></svg>"
  },
  "mapBeforeIndex": 4,
  "routes": [
    {
      "title": "From the market to the café",
      "map": {
        "width": 560,
        "height": 465,
        "nodes": [
          {
            "id": "a",
            "x": 100,
            "y": 75,
            "label": "Pottery workshop"
          },
          {
            "id": "b",
            "x": 280,
            "y": 75,
            "label": "Herb garden"
          },
          {
            "id": "c",
            "x": 460,
            "y": 75,
            "label": "Bookshop"
          },
          {
            "id": "d",
            "x": 100,
            "y": 235,
            "label": "Fountain"
          },
          {
            "id": "e",
            "x": 280,
            "y": 235,
            "label": "Crossing"
          },
          {
            "id": "f",
            "x": 460,
            "y": 235,
            "label": "Print studio"
          },
          {
            "id": "g",
            "x": 100,
            "y": 395,
            "label": "South gate"
          },
          {
            "id": "h",
            "x": 280,
            "y": 395,
            "label": "Market entrance"
          },
          {
            "id": "i",
            "x": 460,
            "y": 395,
            "label": "Courtyard café"
          }
        ],
        "edges": [
          [
            "a",
            "b"
          ],
          [
            "b",
            "c"
          ],
          [
            "d",
            "e"
          ],
          [
            "e",
            "f"
          ],
          [
            "g",
            "h"
          ],
          [
            "h",
            "i"
          ],
          [
            "a",
            "d"
          ],
          [
            "d",
            "g"
          ],
          [
            "b",
            "e"
          ],
          [
            "e",
            "h"
          ],
          [
            "c",
            "f"
          ],
          [
            "f",
            "i"
          ]
        ]
      },
      "start": "h",
      "goal": "i",
      "expectedPath": [
        "h",
        "e",
        "d",
        "a",
        "b",
        "c",
        "f",
        "i"
      ],
      "buttonLabels": {
        "north": "Proceed northwards",
        "south": "Head south",
        "west": "Take the west path",
        "east": "Continue east"
      },
      "transcript": [
        "Begin at the market entrance in the bottom centre of the plan, with the north arrow pointing towards the top.",
        "We will finish at the courtyard café, but take the longer route through the arts quarter rather than the direct path beside the entrance.",
        "First proceed north to the crossing, then take the west path to the fountain, where the pottery signs begin.",
        "From that point, go north to the pottery workshop and stop before choosing the next path.",
        "Now head east to the herb garden, then continue east again to the bookshop at the upper right corner.",
        "Do not turn south at the garden, or you will return to the crossing.",
        "At the bookshop, go south to the print studio, then carry on south to the courtyard café, our final stop."
      ],
      "explanation": "入口h向北e，向西d，向北a，向东b，向东c，向南f，再向南到咖啡馆i。",
      "vocabulary": [
        [
          "proceed northwards",
          "向北走"
        ],
        [
          "take the west path",
          "走向西的路"
        ],
        [
          "continue east",
          "继续向东"
        ],
        [
          "carry on south",
          "继续向南"
        ]
      ]
    }
  ],
  "words": "redevelop|重新开发改建|To redevelop an area is to change it for new uses.|redevelop是改建区域以作新用途。|The council plans to ___ the old yard.|市政计划改建旧场地。\nvibrant|充满活力的|A vibrant place is lively and active.|vibrant地方热闹而活跃。|The weekend market makes the street ___.|周末市场让街道充满活力。\nyoung professional|年轻的职场人士|A young professional is a young adult working in a skilled career.|young professional是从事专业工作的年轻人。|The new flats attract a ___.|新公寓吸引年轻职场人士。\ncraftwork|手工艺品|Craftwork is work made mainly by skilled hands.|craftwork主要用手工技能制作。|The stalls sell local ___.|摊位出售本地手工艺品。\nlocally made|本地制作的|Something locally made is produced in the nearby area.|locally made表示在附近地区生产。|The shop sells ___ bowls.|店里卖本地制作的碗。\naffordable|价格可承受的|An affordable item costs an amount people can manage.|affordable东西的价钱在人们承受范围内。|The café offers ___ lunches.|咖啡馆提供价格可承受的午饭。\ninspiration|灵感来源|Inspiration gives someone an idea for creative work.|inspiration给人创作的想法。|The designer found ___ in everyday objects.|设计师从日常物件获得灵感。\nman-made fibre|人造纤维|A man-made fibre is produced through a manufacturing process.|人造纤维由加工制造产生。|The cloth contains a ___ as well as cotton.|布料含人造纤维和棉。\nreceipt|购物小票；收据|A receipt records payment for a purchase.|receipt记录某次购买付款。|Keep the ___ to claim the parking offer.|保留小票以享受停车优惠。\nflat rate|统一固定费率|A flat rate stays the same within the stated conditions.|flat rate在规定条件内按同一固定数额计费。|Evening parking uses a ___.|晚间停车按统一固定费率收费。\njunction|路口|A junction is where roads or paths meet.|junction是道路交会处。|Check the sign at the ___.|在路口查指示牌。\nopposite|在……对面|Opposite means facing something across a space.|opposite表示隔着空间在对面。|The kiosk is ___ the hall.|售货亭在礼堂对面。\nadjacent to|紧挨着|Adjacent to means directly next to something.|adjacent to表示紧邻。|The garden is ___ the studio.|花园紧挨画室。\ndead end|尽头不通的路|A dead end has no route continuing beyond its final point.|dead end走到尽头后不能继续通行。|The gallery stands at a ___.|美术馆在一条断头路尽头。\nnorthwards|向北|Northwards means towards the north.|northwards表示向北。|Walk ___ from the entrance.|从入口向北走。\nsouthern end|南端|The southern end is the part farthest south.|southern end是最南边的一端。|The café is at the ___ of the path.|咖啡馆在小路南端。",
  "omitted": [
    "vibrant",
    "affordable",
    "receipt",
    "opposite"
  ],
  "contexts": [
    {
      "id": "quarter",
      "title": "A new use for old streets",
      "words": [
        "redevelop",
        "vibrant",
        "young professional",
        "craftwork",
        "locally made",
        "affordable",
        "inspiration",
        "man-made fibre"
      ],
      "paragraphs": [
        "The town decided to {{redevelop}} an old trading area without losing its character. A {{young professional}} opened a small studio there and sold {{craftwork}} at weekends. The vibrant market gave visitors a reason to explore beyond the main road.",
        "A stall offered {{locally made}} bags at an affordable price. The designer took {{inspiration}} from the shapes of old windows. She used cotton with a {{man-made fibre}} so the bags stayed light and strong. Customers could ask how each design had been made."
      ]
    },
    {
      "id": "walk",
      "title": "Walking and parking",
      "words": [
        "receipt",
        "flat rate",
        "junction",
        "opposite",
        "adjacent to",
        "dead end",
        "northwards",
        "southern end"
      ],
      "paragraphs": [
        "The family kept a receipt in case it qualified for a parking offer. Otherwise the evening charge was a {{flat rate}}. From the entrance they walked {{northwards}} to a {{junction}}, checking the map before turning.",
        "A little studio stood {{adjacent to}} the garden. The old hall was opposite it, at a {{dead end}} with no route beyond the door. They planned to finish at the café near the {{southern end}} of the quarter, where everyone could sit down."
      ]
    }
  ],
  "multi": [
    {
      "q": "哪两项表示紧挨着？",
      "options": [
        "adjacent to",
        "directly beside",
        "opposite across the road",
        "beyond the next junction"
      ],
      "answers": [
        0,
        1
      ],
      "why": "紧邻不同于对面和更远处。"
    },
    {
      "q": "哪两项表示条件内固定收费？",
      "options": [
        "a flat rate",
        "one fixed charge for the stated period",
        "a fee increasing with every extra minute",
        "free parking regardless of time"
      ],
      "answers": [
        0,
        1
      ],
      "why": "固定数额不等于免费或逐分钟增加。"
    }
  ],
  "grammar": [
    [
      "The studio is on the same side ___ the garden.",
      "as",
      "the same…as表示与……相同。",
      "The café is on the same side of the road ___ the workshop."
    ],
    [
      "Continue north until you ___ the junction.",
      "reach",
      "until从句用现在时表示将来。",
      "Follow the path until you ___ the bookshop."
    ]
  ],
  "dictation": [
    [
      "The council chose to ___ the old market buildings.",
      "redevelop",
      "改建。"
    ],
    [
      "Small galleries helped make the area more ___.",
      "vibrant",
      "充满活力的。"
    ],
    [
      "The new apartment attracted a ___.",
      "young professional",
      "年轻职场人士。"
    ],
    [
      "The side streets are good places to buy ___.",
      "craftwork",
      "手工艺品。"
    ],
    [
      "Everything on this shelf is ___.",
      "locally made",
      "本地制作的。"
    ],
    [
      "The stalls offer ___ gifts for visitors.",
      "affordable",
      "价格可承受的。"
    ],
    [
      "The designer explained the ___ for her latest collection.",
      "inspiration",
      "灵感。"
    ],
    [
      "The material combines wool with a ___.",
      "man-made fibre",
      "人造纤维。"
    ],
    [
      "Present a valid ___ before leaving the car park.",
      "receipt",
      "购物小票。"
    ],
    [
      "After the stated time a ___ replaces the hourly charge.",
      "flat rate",
      "统一固定费率。"
    ]
  ],
  "locators": "Which [employment group|1] is increasing most rapidly?~[Young professionals|1] moving into the new flats are growing fastest, although students still account for more {evening visitors}.~employment group对应young professionals，增长与原规模不同。\nWhat [handmade goods|1] do the side streets offer?~The lanes are known for [craftwork|1], especially carved toys and small woven bags, not the {larger fashion shops} on the avenue.~handmade goods对应craftwork。\nWhere should designers find their [creative ideas|1]?~The competition asks for [inspiration|1] from everyday journeys, while the {fabric} may be bought from any supplier.~creative ideas对应inspiration，想法与材料来源不同。\nWhat gives access to the [fixed charge|1] for parking?~The evening [flat rate|1] begins after seven; a {daytime shop receipt} is part of a different discount arrangement.~fixed charge对应flat rate，时段与小票优惠分开。\nThe fountain is [west of|1] which point?~From the central crossing, go [towards the left of the plan|1] to the fountain, keeping the north arrow at the top.~west of对应north-up图的left，具体参照点为crossing。\nThe bookshop is at the [upper-right|1] corner beside ___.~At the [north-east|1] corner you reach the bookshop; the herb garden lies immediately to its west.~upper-right对应north-east，原创简图。\nThe pottery workshop lies [north of|1] the fountain and [beside|2] the garden, so a visitor should not identify the building near the {southern gate} instead.~The workshop is [above|1] the fountain on this north-up plan and [adjacent to|2] the herb garden; the south gate is at the other end of the same vertical path.~north of对应above；beside对应adjacent to。\nThe print studio stands [east of|1] the crossing and [between|2] the bookshop and café, so it is reached from the {middle path} rather than the garden path.~Go [right|1] from the crossing on the north-up map to find the print studio, [midway between|2] the upper bookshop and the courtyard café below it; all three share the eastern path.~east of对应right；between对应midway between。\nThe café is at the [southern end|1] of the eastern path, [next to|2] the lower entrance route rather than the {top path} leading through the garden.~Find the café [at the bottom|1] of the eastern vertical line; it is [alongside|2] the lower path from the market entrance, not beside the garden on the upper row of the plan.~southern end对应at the bottom；next to对应alongside。\nThe south gate is [below|1] the fountain and [to the west|2] of the market entrance, which remains the starting point for the longer guided walk around the quarter.~On this plan the small gate is [south of|1] the fountain and [left|2] of the market entrance; begin the {guided route} at the entrance, not at that separate gate on the corner.~below对应south of；to the west对应left。",
  "paragraphs": [
    {
      "title": "An area with more than one identity",
      "text": "The district was [transformed=>redeveloped=>改建发展。] but not completely rebuilt. Its side lanes offered [reasonably priced=>affordable=>价格可负担。] objects made by local artists. The new flats attracted [career starters=>young professionals=>年轻职场人士。], while students still used the cafés. Designers could [draw ideas from=>take inspiration from=>获得灵感。] daily life without copying one another. Their materials might be [manufactured=>man-made=>人造。] or natural. The competition rewarded an [original=>distinctive and new=>有原创性的。] approach.",
      "extras": [
        "the largest resident group in every case",
        "free items with no price",
        "a requirement to copy last year’s winner"
      ]
    },
    {
      "title": "A clear route through the quarter",
      "text": "The walk began [at the lower side=>at the southern end=>北向上图的南侧。] of the map. Visitors headed [towards the top=>northwards=>向北。] to the crossing. They turned beside a [meeting of paths=>junction=>路口。] and passed a studio [directly next to=>adjacent to=>紧邻。] a garden. The final café was [across the space from=>opposite=>对面。] an open seating area. Drivers checked whether they owed an hourly fee or [a fixed sum=>a flat rate=>固定费率。] for the evening.",
      "extras": [
        "continue south towards the upper edge",
        "an amount rising every minute",
        "far beyond the neighbouring garden"
      ]
    }
  ],
  "signals": [
    {
      "title": "What has changed in the district",
      "focus": "增长对象、街巷特色与停车条件。",
      "text": "The old trading quarter has changed rapidly, but it is useful to separate the people living here from those who simply visit at night.\nYoung professionals are the fastest-growing resident group, whereas students remain a major part of the evening crowd.~常住增长群体与夜间客群区分。\nThat mixture supports cafés, workshops and small performance spaces throughout the week.\nIf you want original craftwork at manageable prices, explore the side lanes rather than the main shopping avenue.~推荐地点对应手工艺需求。\nThe oldest large public buildings are still on the avenue, so a history walk would follow a different route.\nDrivers should also check the parking notice instead of assuming a shop purchase makes every stay free.\nA flat evening charge applies after seven; the receipt discount is a separate daytime scheme with its own conditions.~固定费率时段与小票优惠不混。\nThe information board at each entrance gives the current details before you leave your vehicle."
    }
  ],
  "book": 12,
  "groups": [
    [
      "redevelop",
      "vibrant",
      "young professional",
      "craftwork",
      "locally made"
    ],
    [
      "affordable",
      "inspiration",
      "man-made fibre",
      "receipt",
      "flat rate"
    ],
    [
      "junction",
      "opposite",
      "adjacent to",
      "dead end",
      "northwards",
      "southern end"
    ]
  ],
  "vocab": [
    [
      "The area was redeveloped, but several original buildings remain.\nredevelop 在这里指什么？",
      "重新开发改建",
      "全部维持原样",
      "只能全部拆除",
      "仅暂时封路",
      "重新开发不一定全拆。"
    ],
    [
      "The vibrant district attracts visitors, though some lanes stay quiet.\nvibrant 在这里指什么？",
      "充满活力的",
      "整天毫无声音的",
      "一定人口最多的",
      "所有角落都拥挤的",
      "有活力不代表处处吵闹或最多人。"
    ],
    [
      "Young professionals are increasing faster than students, who still form a larger group.\nyoung professional 在这里指什么？",
      "年轻的职场人士",
      "所有中学生",
      "只有退休专家",
      "刚入学尚未就业的人",
      "职业身份与学生不同，增长不等于规模。"
    ],
    [
      "The side lanes are known for craftwork rather than chain-store fashion.\ncraftwork 在这里指什么？",
      "手工艺品",
      "只由工厂大量印制的商品",
      "普通办公报表",
      "不许购买的展品",
      "强调手工制作。"
    ],
    [
      "The locally made pots use clay from elsewhere, so origin of material and production differ.\nlocally made 在这里指什么？",
      "本地制作的",
      "原料一定全部本地的",
      "只在本地出售却在外地做的",
      "必须由外地工厂生产的",
      "制作地点不同于原料来源或销售地点。"
    ],
    [
      "Affordable artwork is not necessarily the cheapest item in every shop.\naffordable 在这里指什么？",
      "价格可承受的",
      "永远全城最低价的",
      "完全不收费的",
      "只限昂贵收藏的",
      "可负担不等于最低价或免费。"
    ],
    [
      "The inspiration comes from travel, while the materials come from local shops.\ninspiration 在这里指什么？",
      "灵感来源",
      "最终成品的尺寸",
      "原材料的供应商",
      "评奖的奖金",
      "灵感与材料来源不同。"
    ],
    [
      "The outfit may combine a man-made fibre with natural cloth.\nman-made fibre 在这里指什么？",
      "人造纤维",
      "未经加工的羊毛",
      "只能手工编织的线",
      "天然材料的唯一类别",
      "人造与天然可混用。"
    ]
  ]
});
