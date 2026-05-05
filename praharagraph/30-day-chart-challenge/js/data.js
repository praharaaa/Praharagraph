const weeks = [
  {
    title: "Part 1: Comparisons",
    days: [
      {
        day: 1,
        prompt: "Part-to-Whole",
        embed: `<iframe title="How Many Public Holidays Does Each Southeast Asian Countries Get Per Month in 2026?" aria-label="Small multiple column chart" id="datawrapper-chart-Ux1bW" src="https://datawrapper.dwcdn.net/Ux1bW/3/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="615" data-external="1"></iframe>`,
        commentary: "This is funny because when I found this holiday dataset, it seemed like some governments in SEA countries agreed to set a few holidays in September."
      },
      {
        day: 2,
        prompt: "Pictogram",
        embed: `<iframe title="When It Comes to Palm Oil, Indonesia Alone Accounts for Nearly 60% of the World's Total Production." aria-label="Stacked column chart" id="datawrapper-chart-RNaM0" src="https://datawrapper.dwcdn.net/RNaM0/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="862" data-external="1"></iframe>`,
        commentary: "When I created this, Datawrapper didn't have a pictogram chart type. So, I put some emoji on the stacked bar chart as a pictogram symbol."
      },
      {
        day: 3,
        prompt: "Mosaic",
        embed: `<iframe title="People Still Prefer Neutral Car Colors" aria-label="Stacked Bars" id="datawrapper-chart-42LOf" src="https://datawrapper.dwcdn.net/42LOf/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="357" data-external="1"></iframe>`,
        commentary: "It's pretty common to see white, gray, and black cars on the street. But for me, my favorite color for a car is khaki."
      },
      {
        day: 4,
        prompt: "Slope",
        embed: `<iframe title="Nuclear Electricity Alone Shows No Sign of Cost Reduction Throughout its Development" aria-label="Small multiple line chart" id="datawrapper-chart-pOhNU" src="https://datawrapper.dwcdn.net/pOhNU/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="615" data-external="1"></iframe>`,
        commentary: "To be honest, I should say this is the worst chart I made during the challenge, because I myself have forgotten which units were used for each category."
      },
      {
        day: 5,
        prompt: "Experimental",
        embed: `<iframe title="Table of Nuclides" aria-label="Scatter Plot" id="datawrapper-chart-xHJQv" src="https://datawrapper.dwcdn.net/xHJQv/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="719" data-external="1"></iframe>`,
        commentary: "On this day, I tried to create a table of nuclides. I was surprised when I found that Datawrapper can handle so many dots in a scatterplot."
      },
      {
        day: 6,
        prompt: "Reporters Without Borders Data Day (Data Day)",
        embed: `<iframe title="Indonesia's Press Freedom Ranking in Southeast Asia Has Been Declining Since 2015" aria-label="Line chart" id="datawrapper-chart-nbUTR" src="https://datawrapper.dwcdn.net/nbUTR/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="649" data-external="1"></iframe>`,
        commentary: "Datawrapper doesn't have a feature to highlight specific lines, so I made Indonesia's line chart red. Of course, I wasn't surprised by the fact that Indonesia's Press Freedom Ranking has been declining."
      }
    ]
  },
  {
    title: "Part 2: Distributions",
    days: [
      {
        day: 7,
        prompt: "Multiscale",
        embed: `<iframe title="Indonesia's 2025 Tax Revenue Target Was Higher Than What the Government Collected" aria-label="Bullet Bars" id="datawrapper-chart-x06UR" src="https://datawrapper.dwcdn.net/x06UR/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="486" data-external="1"></iframe>`,
        commentary: "There is no free lunch. There are always consequences."
      },
      {
        day: 8,
        prompt: "Circular",
        embed: `<iframe title="Mineral Products and Metals Lead Indonesia's Exports Product in 2024" aria-label="Donut Chart" id="datawrapper-chart-M8CXf" src="https://datawrapper.dwcdn.net/M8CXf/2/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="498" data-external="1"></iframe>`,
        commentary: "I thought Indonesia's top export product in 2024 was Crude Palm Oil (CPO), but mineral products and metals were still the winners."
      },
      {
        day: 9,
        prompt: "Wealth",
        embed: `<iframe title="How Much Did Indonesia's DPR Members Declare in 2025?" aria-label="Choropleth map" id="datawrapper-chart-HiB0L" src="https://datawrapper.dwcdn.net/HiB0L/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="1501" data-external="1"></iframe>`,
        commentary: "Datawrapper didn't have a waffle chart or interactive coloring like a choropleth map, so I got around this by creating a GeoJSON that formed the waffle chart itself, making sure each box had an ID that corresponded to the number of each DPR member. It was quite tricky, but I managed to make it work."
      },
      {
        day: 10,
        prompt: "Pop Culture",
        embed: `<iframe title="Grammy Debut Hits: First Single, First Win" aria-label="Scatter Plot" id="datawrapper-chart-e4ac2" src="https://datawrapper.dwcdn.net/e4ac2/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="906" data-external="1"></iframe>`,
        commentary: "I'm back to making a 'waffle' chart, but this time using a scatter plot because I needed to display several debut singles in the form of stars. I also just found out that during 2013–2016, many debut singles won Grammys."
      },
      {
        day: 11,
        prompt: "Physical",
        embed: `<iframe title="How Indonesian Ultrarunners Accumulated Their Kilometers in 2025" aria-label="Scatter Plot" id="datawrapper-chart-mSEwz" src="https://datawrapper.dwcdn.net/mSEwz/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="842" data-external="1"></iframe>`,
        commentary: "A lot of people pushed themselves to run farther and participate in marathons."
      },
      {
        day: 12,
        prompt: "FlowingData (Theme Day)",
        embed: `<iframe title="Changing ranks for fields of study in the United States" aria-label="Line chart" id="datawrapper-chart-Gcx78" src="https://datawrapper.dwcdn.net/Gcx78/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="1157" data-external="1"></iframe>`,
        commentary: "Business has always been number one, but the fact that the computer and information field has experienced a significant increase in interest made me think: which field will attract the most interest 30 years from now?"
      }
    ]
  },
  {
    title: "Part 3: Relationships",
    days: [
      {
        day: 13,
        prompt: "Ecosystems",
        embed: `<iframe title="The Impact of the PPCDAm on Deforestation in The Legal Amazon of Brazil" aria-label="Stacked column chart" id="datawrapper-chart-DpHRC" src="https://datawrapper.dwcdn.net/DpHRC/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="877" data-external="1"></iframe>`,
        commentary: "I love this as one example of how the government's role can help reduce illegal logging in Brazil."
      },
      {
        day: 14,
        prompt: "Trade",
        embed: `<iframe title="How One Political Move Pushed Oil Prices From $65 to $114" aria-label="Line chart" id="datawrapper-chart-rb33G" src="https://datawrapper.dwcdn.net/rb33G/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="706" data-external="1"></iframe>`,
        commentary: "And this only requires closing one strait."
      },
      {
        day: 15,
        prompt: "Correlation",
        embed: `<iframe title="There Is No Correlation Between the Sepal Length of Iris Setosa Varieties and the Bill Length of Gentoo Penguins on Biscoe Island." aria-label="Scatter Plot" id="datawrapper-chart-a4LYN" src="https://datawrapper.dwcdn.net/a4LYN/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="707" data-external="1"></iframe>`,
        commentary: "I combined two well-known datasets that R users will recognize. Well, no correlation is still a correlation, right? Haha."
      },
      {
        day: 16,
        prompt: "Causation",
        embed: `<iframe title="How the 2024 solar eclipse path shaped search interest in the United States" aria-label="Choropleth map" id="datawrapper-chart-fFBl1" src="https://datawrapper.dwcdn.net/fFBl1/2/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="573" data-external="1"></iframe>`,
        commentary: "For me, this is a unique situation where a celestial phenomenon can influence search traffic on Google. The amazing thing is, the area with the highest search volume is in the path of the solar eclipse itself."
      },
      {
        day: 17,
        prompt: "Remake",
        embed: `<iframe title="Life Expectancy Among Native White Males in the U.S., 1860" aria-label="Bullet Bars" id="datawrapper-chart-QhIHX" src="https://datawrapper.dwcdn.net/QhIHX/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="2130" data-external="1"></iframe>`,
        commentary: "It's hard to believe that just over 100 years ago, people struggled to live past the age of 40."
      },
      {
        day: 18,
        prompt: "UNICEF (Data Day)",
        embed: `<iframe title="High Literacy Rates Among Young Women Don't Always Mean They Get to Finish High School" aria-label="Scatter Plot" id="datawrapper-chart-yMHux" src="https://datawrapper.dwcdn.net/yMHux/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="837" data-external="1"></iframe>`,
        commentary: "This data is quite upsetting to me because it shows that many women are still prevented from pursuing higher education. It's as if women are only expected to be literate, without being given the opportunity to pursue higher education."
      }
    ]
  },
  {
    title: "Part 4: Timeseries",
    days: [
      {
        day: 19,
        prompt: "Evolution",
        embed: `<iframe title="Flowering Plants Conquered Most of Earth's Plant Species in Under 30 Million Years" aria-label="Area Chart" id="datawrapper-chart-8sauJ" src="https://datawrapper.dwcdn.net/8sauJ/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="646" data-external="1"></iframe>`,
        commentary: "This is my first time making an illustration using Datawrapper, so I think there are a lot of inaccuracies regarding the exact numbers for each category. Regardless, the world today would likely look different if the dominant trees on Earth were pine trees and ferns."
      },
      {
        day: 20,
        prompt: "Global Change",
        embed: `<iframe title="Post-Pandemic Life Evaluation Ratings: Some Regions Thrived, Others Didn't" aria-label="Choropleth map" id="datawrapper-chart-f0fiR" src="https://datawrapper.dwcdn.net/f0fiR/2/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="490" data-external="1"></iframe>`,
        commentary: "I once used Gallup data to see if people felt happier after COVID-19 was over. I also tried to look again at people's happiness data before and after COVID-19."
      },
      {
        day: 21,
        prompt: "Historical",
        embed: `<iframe title="20 Years of &quot;Idul Fitri&quot; on Google Trends Indonesia: How Searches Move Every Year" aria-label="Small multiple line chart" id="datawrapper-chart-Zckwu" src="https://datawrapper.dwcdn.net/Zckwu/3/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="864" data-external="1"></iframe>`,
        commentary: "Google Search truly captures how Indonesians' searches for 'Eid al-Fitr' shift annually from December to January."
      },
      {
        day: 22,
        prompt: "New Tool",
        embed: `<iframe title="AI as the New Work Tool. But Where's the Work Itself?" aria-label="Line chart" id="datawrapper-chart-uJGsy" src="https://datawrapper.dwcdn.net/uJGsy/2/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="591" data-external="1"></iframe>`,
        commentary: "Yes, even I am confused about whether AI will really provide new jobs in my country."
      },
      {
        day: 23,
        prompt: "Seasons",
        embed: `<iframe title="London Brought a Drizzle while Jakarta Brought a Flood." aria-label="Line chart" id="datawrapper-chart-1mlwA" src="https://datawrapper.dwcdn.net/1mlwA/4/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="615" data-external="1"></iframe>`,
        commentary: "Maybe people in London need to experience living in Jakarta during the rainy season for three months and see if they can survive."
      },
      {
        day: 24,
        prompt: "South China Morning Post Theme Day",
        embed: `<iframe title="Iraq's Bloody Toll" aria-label="Line chart" id="datawrapper-chart-6YNC1" src="https://datawrapper.dwcdn.net/6YNC1/3/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="841" data-external="1"></iframe>`,
        commentary: "One of my favorite charts, because it's simple yet provocative. Even as I was creating it, I felt uncomfortable. It's a simple chart, but it can make people emotional."
      }
    ]
  },
  {
    title: "Part 5: Uncertainties",
    days: [
      {
        day: 25,
        prompt: "Space",
        embed: `<iframe title="What if You Could Draw the Entire History of the Universe on a Single Diagram?" aria-label="Scatter Plot" id="datawrapper-chart-xd3Un" src="https://datawrapper.dwcdn.net/xd3Un/2/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="787" data-external="1"></iframe>`,
        commentary: "I love Penrose diagrams, and luckily Datawrapper has a feature to create areas in a scatterplot. I used that feature to create a Penrose diagram. Of course, I didn't do it manually, I asked AI to help generate the Penrose coordinates more accurately and quickly, then manually added the text and emojis."
      },
      {
        day: 26,
        prompt: "Trend",
        embed: `<iframe title="300 Months of Shaking Ground" aria-label="Scatter Plot" id="datawrapper-chart-puKTe" src="https://datawrapper.dwcdn.net/puKTe/2/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="1000" data-external="1"></iframe>`,
        commentary: "I tested the scatterplot in Datawrapper further and found it quite powerful. In this chart, I used AI again to convert Cartesian coordinates to polar coordinates. And it worked."
      },
      {
        day: 27,
        prompt: "Animation",
        embed: `<iframe title="The Top 50 Animated Films Over Time" aria-label="Scatter Plot" id="datawrapper-chart-Aj8tX" src="https://datawrapper.dwcdn.net/Aj8tX/2/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="665" data-external="1"></iframe>`,
        commentary: "I hope Datawrapper will add animation features to its charts in the future. For now, I chose a dataset of high-grossing animated films."
      },
      {
        day: 28,
        prompt: "Modeling",
        embed: `<iframe title="When a Scatter Plot Becomes a Drawing" aria-label="Scatter Plot" id="datawrapper-chart-bDvpM" src="https://datawrapper.dwcdn.net/bDvpM/2/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="635" data-external="1"></iframe>`,
        commentary: "Instead of thinking of modelling as forecasting, I took a different approach. And I think you know what that is."
      },
      {
        day: 29,
        prompt: "Monochrome",
        embed: `<iframe title="Mona Lisa" aria-label="Scatter Plot" id="datawrapper-chart-fJG9c" src="https://datawrapper.dwcdn.net/fJG9c/3/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="1011" data-external="1"></iframe>`,
        commentary: "Once again, I used a scatterplot to draw, but this time I used the dots themselves to form the image of the Mona Lisa."
      },
      {
        day: 30,
        prompt: "Global Health Data Exchange (Data Day)",
        embed: `<iframe title="Household TB Exposure Is Highest in India" aria-label="Bar Chart" id="datawrapper-chart-SpZ0P" src="https://datawrapper.dwcdn.net/SpZ0P/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="607" data-external="1"></iframe>`,
        commentary: "To conclude the final day, I chose this dataset. It reminded me of a friend who had tuberculosis and had to take medication for over three months without stopping."
      }
    ]
  }
];