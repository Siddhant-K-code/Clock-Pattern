"use strict";

console.clear();

const Clock = (props) => {
  return /*#__PURE__*/ React.createElement("div", {
    class: "clock",
    style: {
      "--smallAngle": props.small * 30 + "deg",
      "--bigAngle": props.big * 30 + "deg",
      "--angleFrom": props.angleFrom * 30 + "deg",
      "--angleTo": props.angleTo * 30 + "deg",
      "--time": props.time + "s",
      "--delay": props.delay + "s"
    }
  });
};

const ClockNumber = (props) => {
  const clearState = [11, 11];
  const states = {
    "|": [0, 6],
    "|_": [0, 3],
    "_|": [9, 0],
    "-|": [9, 6],
    "|-": [3, 6],
    "-": [9, 3],
    n: clearState
  };
  const topLeft = [9, 6];
  const NUMBERS = [
    [
      //0
      ["|-", "-", "-", "-|"],
      ["|", "|-", "-|", "|"],
      ["|", "|", "|", "|"],
      ["|", "|", "|", "|"],
      ["|", "|_", "_|", "|"],
      ["|_", "-", "-", "_|"]
    ],
    [
      //1
      ["n", "|-", "-", "-|"],
      ["n", "|_", "-|", "|"],
      ["n", "n", "|", "|"],
      ["n", "n", "|", "|"],
      ["n", "n", "|", "|"],
      ["n", "n", "|_", "_|"]
    ],
    [
      //2
      ["|-", "-", "-", "-|"],
      ["|_", "-", "-|", "|"],
      ["|-", "-", "_|", "|"],
      ["|", "|-", "-", "_|"],
      ["|", "|_", "-", "-|"],
      ["|_", "-", "-", "_|"]
    ],
    [
      //3
      ["|-", "-", "-", "-|"],
      ["|_", "-", "-|", "|"],
      ["|-", "-", "_|", "|"],
      ["|_", "-", "-|", "|"],
      ["|-", "-", "_|", "|"],
      ["|_", "-", "-", "_|"]
    ],
    [
      //4
      ["|-", "-|", "|-", "-|"],
      ["|", "|", "|", "|"],
      ["|", "|_", "_|", "|"],
      ["|_", "-", "-|", "|"],
      ["n", "n", "|", "|"],
      ["n", "n", "|_", "_|"]
    ],
    [
      //5
      ["|-", "-", "-", "-|"],
      ["|", "|-", "-", "_|"],
      ["|", "|_", "-", "-|"],
      ["|_", "-", "-|", "|"],
      ["|-", "-", "_|", "|"],
      ["|_", "-", "-", "_|"]
    ],
    [
      //6
      ["|-", "-", "-", "-|"],
      ["|", "|-", "-", "_|"],
      ["|", "|_", "-", "-|"],
      ["|", "|-", "-|", "|"],
      ["|", "|_", "_|", "|"],
      ["|_", "-", "-", "_|"]
    ],
    [
      //7
      ["|-", "-", "-", "-|"],
      ["|_", "-", "-|", "|"],
      ["n", "n", "|", "|"],
      ["n", "n", "|", "|"],
      ["n", "n", "|", "|"],
      ["n", "n", "|_", "_|"]
    ],
    [
      //8
      ["|-", "-", "-", "-|"],
      ["|", "|-", "-|", "|"],
      ["|", "|_", "_|", "|"],
      ["|", "|-", "-|", "|"],
      ["|", "|_", "_|", "|"],
      ["|_", "-", "-", "_|"]
    ],
    [
      //9
      ["|-", "-", "-", "-|"],
      ["|", "|-", "-|", "|"],
      ["|", "|_", "_|", "|"],
      ["|_", "-", "-|", "|"],
      ["n", "n", "|", "|"],
      ["n", "n", "|_", "_|"]
    ],
    [
      //9
      ["n", "n", "n", "n"],
      ["n", "|-", "-|", "n"],
      ["n", "|_", "_|", "n"],
      ["n", "|-", "-|", "n"],
      ["n", "|_", "_|", "n"],
      ["n", "n", "n", "n"]
    ]
  ];
  const number = NUMBERS[props.number];
  return /*#__PURE__*/ React.createElement(
    "div",
    null,
    number.map((row) => {
      return /*#__PURE__*/ React.createElement(
        "div",
        {
          class: "row"
        },
        row.map((clock) => {
          return /*#__PURE__*/ React.createElement(Clock, {
            small: states[clock][0] | null,
            big: states[clock][1] | null
          });
        })
      );
    })
  );
};

const App = () => {
  const [distance, setDistance] = React.useState(1);
  const MAX_CLOCKS = 200;
  const MAX_CLOCKS_COLS = 10;
  const CLOCKS = [];
  const rows = [];

  for (let j = 0; j < (void 0).MAX_CLOCKS_COLS; j++) {
    CLOCKS.push(
      /*#__PURE__*/ React.createElement(Clock, {
        angleFrom: i - 1 + i - 2,
        angleTo: i + (i - 1 + i - 2),
        time: 5,
        delay: 0
      })
    );
  }

  const [hour, setHour] = React.useState(["0", "0", "0", "0", "0", "0"]);
  setTimeout(() => {
    setHour(getArrHour(new Date())); // setHour(["5","5","1","1","0","5"]);
  }, 1000);

  const getArrHour = (date) => {
    const time = [
      date.getHours().toString()[1] ? date.getHours().toString()[0] : 0,
      date.getHours().toString()[1] || date.getHours().toString()[0],
      date.getMinutes().toString()[1] ? date.getMinutes().toString()[0] : 0,
      date.getMinutes().toString()[1] || date.getMinutes().toString()[0],
      date.getSeconds().toString()[1] ? date.getSeconds().toString()[0] : 0,
      date.getSeconds().toString()[1] || date.getSeconds().toString()[0]
    ];
    console.log(date.getHours().toString()[1]);
    return time;
  };

  const TIME = [
    /*#__PURE__*/ React.createElement(ClockNumber, {
      number: hour[0]
    }),
    /*#__PURE__*/ React.createElement(ClockNumber, {
      number: hour[1]
    }),
    /*#__PURE__*/ React.createElement(ClockNumber, {
      number: "10"
    }),
    /*#__PURE__*/ React.createElement(ClockNumber, {
      number: hour[2]
    }),
    /*#__PURE__*/ React.createElement(ClockNumber, {
      number: hour[3]
    }),
    /*#__PURE__*/ React.createElement(ClockNumber, {
      number: "10"
    }),
    /*#__PURE__*/ React.createElement(ClockNumber, {
      number: hour[4]
    }),
    /*#__PURE__*/ React.createElement(ClockNumber, {
      number: hour[5]
    })
  ];
  return /*#__PURE__*/ React.createElement(
    "div",
    {
      class: "app"
    },
    TIME
  );
};

ReactDOM.render(
  /*#__PURE__*/ React.createElement(App, null),
  document.querySelector("#root")
);
