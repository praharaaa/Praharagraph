// ===== Praharagraph Visualization Data - 2018 =====

const visualizationData = {
  "2018": [
    {
      id: "2018-04-02",
      title: "US Tuition Growth (2005-2025)",
      date: "April 2, 2018",
      week: "Week 1",
      overview: "Visualization of percentage increase in public four-year in-state tuition and fees across U.S. states from 2005 to 2025, adjusted for inflation (in 2025 dollars).",
      keyFindings: [
        "Nevada, Hawaii, and Arizona experienced the highest tuition increases (90%+)",
        "Even after adjusting for inflation, most states saw significant growth in college costs",
        "Western states lead the tuition surge"
      ],
      dataSource: "College Board",
      tools: ["R", "tidyverse", "sf", "tigris", "showtext", "ggplot2"],
      codeLink: "https://github.com/praharaaa/Tidy-Tuesday/tree/main/2018/2018-04-02",
      imageUrl: "https://raw.githubusercontent.com/praharaaa/Tidy-Tuesday/main/2018/2018-04-02/tuition_growth_map.png",
      year: "2018"
    },
    {
      id: "2018-04-09",
      title: "NFL Pay Disparity (2011-2018)",
      date: "April 9, 2018",
      week: "Week 2",
      overview: "This visualization explores salary inequality across different NFL positions from 2011 to 2018, measured by the gap between mean and median salaries.",
      keyFindings: [
        "Quarterback has the highest salary inequality gap among all positions",
        "In 2018, Offensive Lineman had the lowest salary inequality gap compared to other positions",
        "There is no specific pattern in pay gap figures across all positions year-over-year"
      ],
      dataSource: "NFL Salary Dataset",
      tools: ["R", "tidyverse", "tidytuesdayR", "ggrepel", "ggtext", "showtext", "ggplot2"],
      codeLink: "https://github.com/praharaaa/Tidy-Tuesday/tree/main/2018/2018-04-09",
      imageUrl: "https://raw.githubusercontent.com/praharaaa/Tidy-Tuesday/main/2018/2018-04-09/nfl_pay_disparity.png",
      year: "2018"
    },
    {
      id: "2018-04-16",
      title: "HIV/AIDS Mortality Rate Trends in Southern Africa",
      date: "April 16, 2018",
      week: "Week 3",
      overview: "This visualization explores HIV/AIDS Mortality Rate Trends from 1990 to 2016.",
      keyFindings: [
        "Mortality rates from HIV/AIDS in countries like Botswana, Swaziland, and Zimbabwe were among the highest globally, reaching over 40% at their peak during the late 1990s and early 2000s, but have steadily decreased since then",
        "The countries highlighted with the highest mortality rates also showed the most rapid and consistent declines, suggesting successful public health interventions and wider access to treatments like antiretroviral therapy in recent years",
        "By 2016, the differences in mortality between these high-burden countries and other sub-Saharan African nations had narrowed, yet Botswana, Swaziland, and South Africa remained among those with relatively higher rates of HIV/AIDS-related deaths"
      ],
      dataSource: "Global Mortality Dataset",
      tools: ["R", "tidyverse", "tidytuesdayR", "ggrepel", "ggtext", "showtext", "ggplot2"],
      codeLink: "https://github.com/praharaaa/Tidy-Tuesday/tree/main/2018/2018-04-16",
      imageUrl: "https://raw.githubusercontent.com/praharaaa/Tidy-Tuesday/main/2018/2018-04-16/HIV_AIDS_Mortality_Rate.png",
      year: "2018"
    },
    {
      id: "2018-04-23",
      title: "Equal Numbers, Unequal Pay: Gender and Income in Australia",
      date: "April 23, 2018",
      week: "Week 4",
      overview: "This visualization explores how average taxable income and gender composition vary across Australian occupations in the 2015–2016 tax year. The chart maps each occupation by its female-to-male participation ratio and average taxable income, while point size encodes the income gap between men and women.",
      keyFindings: [
        "Male-dominated occupations tend to cluster at higher average taxable incomes, while female-dominated occupations concentrate in lower-paying roles",
        "Larger points, indicating wider income gaps, appear more frequently in higher-income, male-dominated jobs such as surgeons, judges, and senior corporate roles",
        "Some low-paid occupations with more balanced or female-dominated workforces (for example, care, clerical, and domestic roles) show relatively small income gaps but remain far below the earnings of high-income, male-dominated professions"
      ],
      dataSource: "Australian Taxation Office",
      tools: ["R", "tidyverse", "tidytuesdayR", "ggrepel", "ggtext", "showtext", "scales", "ggplot2"],
      codeLink: "https://github.com/praharaaa/Tidy-Tuesday/tree/main/2018/2018-04-23",
      imageUrl: "https://raw.githubusercontent.com/praharaaa/Tidy-Tuesday/main/2018/2018-04-23/income_gap_in_AU.png",
      year: "2018"
    },
    {
      id: "2018-04-30",
      title: "Income and Poverty Across U.S. Counties",
      date: "April 30, 2018",
      week: "Week 5",
      overview: "This visualization explores how county-level poverty rates relate to median household income across the United States in 2015. It uses a bubble chart with a smooth trend line to show how poverty changes along the income distribution.",
      keyFindings: [
        "County poverty rates generally decrease as median household income increases",
        "Most counties cluster in the middle-income range (around USD 40K–70K), with poverty rates typically between about 10% and 30%",
        "At higher income levels, additional income is associated with smaller reductions in poverty, so the poverty curve flattens for richer counties"
      ],
      dataSource: "American Community Survey (ACS) 2015",
      tools: ["R", "tidyverse", "tidytuesdayR", "ggrepel", "ggtext", "showtext", "scales", "tigris", "ggplot2"],
      codeLink: "https://github.com/praharaaa/Tidy-Tuesday/tree/main/2018/2018-04-30",
      imageUrl: "https://raw.githubusercontent.com/praharaaa/Tidy-Tuesday/main/2018/2018-04-30/income_and_poverty_US.png",
      year: "2018"
    },
    {
      id: "2018-05-07",
      title: "Dunkin' Donuts Store Locations Across the U.S.",
      date: "May 7, 2018",
      week: "Week 6",
      overview: "This visualization maps the distribution of Dunkin' Donuts store locations across the United States using a grid-based spatial analysis. Each point represents a 10-mile radius grid cell, color-coded by store density to reveal regional patterns.",
      keyFindings: [
        "Dunkin' Donuts stores are heavily concentrated along the East Coast, particularly in New England, the Mid-Atlantic, and Florida",
        "Most grid cells contain 5 or fewer stores, with denser clusters appearing in major metropolitan areas on the East Coast"
      ],
      dataSource: "TidyTuesday Coffee Chain Dataset",
      tools: ["R", "tidyverse", "tidytuesdayR", "sf", "tigris", "ggrepel", "ggtext", "showtext", "scales", "ggplot2"],
      codeLink: "https://github.com/praharaaa/Tidy-Tuesday/tree/main/2018/2018-05-07",
      imageUrl: "https://raw.githubusercontent.com/praharaaa/Tidy-Tuesday/main/2018/2018-05-07/dunkin_donuts_in_US.png",
      year: "2018"
    },
    {
      id: "2018-05-14",
      title: "Star Wars - Ranked & Rated",
      date: "May 14, 2018",
      week: "Week 7",
      overview: "This visualization combines fan-voted episode rankings with character favorability ratings from a comprehensive Star Wars survey. The top section displays all six main saga films ranked by total fan points, while the bottom section shows how different characters are perceived across favorability categories.",
      keyFindings: [
        "Episode V (The Empire Strikes Back) dominates fan rankings with 3,751 total points, followed by Episode VI with 3,304 points",
        "The original trilogy (Episodes IV-VI) consistently outranks the prequel trilogy (Episodes I-III) in fan voting",
        "Han Solo, Yoda, and Obi-Wan are the most favorably rated characters, with over 75% rating them favorably",
        "Jar Jar Binks is the least popular character, with significant unfavorable ratings"
      ],
      dataSource: "Star Wars Fan Survey",
      tools: ["R", "tidyverse", "tidytuesdayR", "ggrepel", "ggtext", "showtext", "scales", "cowplot", "magick", "ggplot2"],
      codeLink: "https://github.com/praharaaa/Tidy-Tuesday/tree/main/2018/2018-05-14",
      imageUrl: "https://raw.githubusercontent.com/praharaaa/Tidy-Tuesday/main/2018/2018-05-14/Star_Wars_Rank_and_Rated.png",
      year: "2018",
      imageHeight: 800
    },
    {
      id: "2018-05-21",
      title: "Average Honey Prices in the US",
      date: "May 21, 2018",
      week: "Week 8",
      overview: "This visualization tracks the average retail price of honey per pound across US states from 1998 to 2012, revealing significant price increases and growing regional disparities.",
      keyFindings: [
        "Average honey price rose from approximately $0.83 per pound in 1998 to $2.37 per pound in 2012, nearly tripling in 14 years",
        "The gap between the cheapest and most expensive states widened considerably over the period",
        "Despite minor fluctuations around 2004-2005, the overall trajectory shows a steady climb in honey prices"
      ],
      dataSource: "Honey Production Dataset",
      tools: ["R", "tidyverse", "ggplot2", "scales", "ggtext", "showtext", "tidytuesdayR"],
      codeLink: "https://github.com/praharaaa/Tidy-Tuesday/tree/main/2018/2018-05-21",
      imageUrl: "https://raw.githubusercontent.com/praharaaa/Tidy-Tuesday/main/2018/2018-05-21/honey_price_in_US.png",
      year: "2018",
      imageHeight: 600
    },
    {
      id: "2018-05-29",
      title: "Marvel's Character Composition: Gender, Alignment, and Identity",
      date: "May 29, 2018",
      week: "Week 9",
      overview: "This alluvial diagram visualizes Marvel's character roster across three dimensions: gender, alignment (good vs. bad), and identity type (secret, public, etc.). Analysis of 11,356 Marvel characters reveals unique patterns in character composition.",
      keyFindings: [
        "The 'male villain with secret identity' archetype dominates: comprising 22% of the entire roster—more than all female character types combined",
        "Bad characters outnumber good characters across all genders, reflecting Marvel's focus on morally complex narratives"
      ],
      dataSource: "Comic Characters Dataset (Marvel only)",
      tools: ["R", "tidyverse", "ggplot2", "ggalluvial", "scales", "ggtext", "showtext"],
      codeLink: "https://github.com/praharaaa/Tidy-Tuesday/tree/main/2018/2018-05-29",
      imageUrl: "https://raw.githubusercontent.com/praharaaa/Tidy-Tuesday/main/2018/2018-05-29/marvel_characters_composition.png",
      year: "2018",
      imageHeight: 650
    },
    {
      id: "2018-06-05",
      title: "Who Rides Biketown After Midnight?",
      date: "June 5, 2018",
      week: "Week 10",
      overview: "This line chart shows NIKE Biketown ridership patterns between midnight and 5 AM during 2016-2017 in Portland. The visualization compares casual riders and subscribers, and weekday versus weekend nights, with shaded bands representing monthly minimum and maximum values.",
      keyFindings: [
        "Casual riders gradually decrease through the night on both weekdays and weekends, indicating nightlife-related trips ending",
        "Subscribers show increased activity at 4-5 AM on weekdays, likely representing early shift workers and morning commuters",
        "Weekend nights have minimal activity for both casual and subscriber ridership"
      ],
      dataSource: "NIKE Biketown Dataset",
      tools: ["R", "tidyverse", "lubridate", "ggplot2"],
      codeLink: "https://github.com/praharaaa/Tidy-Tuesday/tree/main/2018/2018-06-05",
      imageUrl: "https://raw.githubusercontent.com/praharaaa/Tidy-Tuesday/main/2018/2018-06-05/midnight_rides.png",
      year: "2018",
      imageHeight: 600
    },
    {
      id: "2018-06-12",
      title: "Where Football Fans Are Watching: A Regional Breakdown",
      date: "June 12, 2018",
      week: "Week 11",
      overview: "This stacked bar chart shows how football audiences are spread across different regions for each FIFA confederation, revealing interesting patterns in global football viewership.",
      keyFindings: [
        "East Asia & Pacific dominates AFC viewership, making up almost all of the Asian Football Confederation's audience",
        "Sub-Saharan Africa is the main audience for CAF, comprising about 75% of viewers",
        "Americas are important for CONMEBOL and CONCACAF, with both confederations relying heavily on Latin America & Caribbean and North America audiences"
      ],
      dataSource: "FIFA Audiences Dataset",
      tools: ["R", "ggplot2", "dplyr", "tidyverse", "countrycode"],
      codeLink: "https://github.com/praharaaa/Tidy-Tuesday/tree/main/2018/2018-06-12",
      imageUrl: "https://raw.githubusercontent.com/praharaaa/Tidy-Tuesday/main/2018/2018-06-12/Regional_football_fans.png",
      year: "2018",
      imageHeight: 550
    },
    {
      id: "2018-06-19",
      title: "When Hurricanes on the Horizon, Searches on the Rise",
      date: "June 19, 2018",
      week: "Week 12",
      overview: "This line chart shows daily Google search interest for four major 2017 Atlantic hurricanes (Harvey, Irma, Jose, and Maria) in the United States from August 21 to September 25, 2017, tracking how public attention rose and fell around each storm.",
      keyFindings: [
        "Public interest spikes sharply around landfall events as people search for updates and safety information",
        "Harvey and Irma dominate overall search volume with higher peaks than Jose and Maria, suggesting more media coverage",
        "Attention drops quickly after the peak for all four storms, showing public attention moves on once immediate danger passes"
      ],
      dataSource: "Hurricane Google Trends US Dataset",
      tools: ["R", "tidyverse", "tidytuesdayR", "ggplot2", "ggtext", "showtext", "scales"],
      codeLink: "https://github.com/praharaaa/Tidy-Tuesday/tree/main/2018/2018-06-19",
      imageUrl: "https://raw.githubusercontent.com/praharaaa/Tidy-Tuesday/main/2018/2018-06-19/hurricanes_google_trends.png",
      year: "2018",
      imageHeight: 600
    },
    {
      id: "2018-06-26",
      title: "Alcohol Consumption and Muslim Population by Country (2010)",
      date: "June 26, 2018",
      week: "Week 13",
      overview: "This scatter plot compares alcohol consumption and Muslim population percentage across countries in 2010. Each dot represents a country with more than 10% Muslim population, with color indicating world region and size reflecting total Muslim population. The visualization explores how these factors vary independently without suggesting causation.",
      keyFindings: [
        "No clear pattern between Muslim population and alcohol consumption—countries with high Muslim populations show widely different consumption levels",
        "Regional differences matter more: European countries with significant Muslim populations show higher alcohol consumption than Middle East–North Africa countries",
        "Large Muslim populations do not predict consumption: Indonesia, India, and Nigeria show very different patterns despite large Muslim populations",
        "Wide diversity exists even within single regions like Sub-Saharan Africa or Asia-Pacific"
      ],
      dataSource: "TidyTuesday Alcohol Dataset & Pew Research Center Religious Composition Data",
      tools: ["R", "tidyverse", "tidytuesdayR", "ggplot2", "ggrepel", "ggtext", "showtext", "scales"],
      codeLink: "https://github.com/praharaaa/Tidy-Tuesday/tree/main/2018/2018-06-26",
      imageUrl: "https://raw.githubusercontent.com/praharaaa/Tidy-Tuesday/main/2018/2018-06-26/alcohol_consumption_and_muslim_population.png",
      year: "2018",
      imageHeight: 650
    },
    {
      id: "2018-07-03",
      title: "Life Expectancy During Genocides & Wars",
      date: "July 3, 2018",
      week: "Week 14",
      overview: "This faceted bar chart visualizes life expectancy at birth across seven countries that experienced genocides or armed conflicts from 1960 to 2023. Color-coded bars distinguish normal years, ongoing conflict periods, and acute crisis years, revealing how historical atrocities left measurable marks on human lifespan data.",
      keyFindings: [
        "Cambodia's dramatic collapse (1975-1979): The Khmer Rouge genocide caused life expectancy to plummet from ~45 years to ~10-15 years—the most severe decline in the dataset",
        "Lebanon's prolonged crisis (1975-1990) created sustained suppression of life expectancy, showing chronic conflict's different impact pattern",
        "Rwanda's 1994 genocide shows a sharp one-year decline with relatively quick recovery afterward",
        "Bosnia's concentrated impact (1992-1995) shows visible dip with recovery after Dayton Accords",
        "Indonesia and Bangladesh show brief shocks (1965-1966, 1971) followed by rapid recovery"
      ],
      dataSource: "World Bank Life Expectancy Data",
      tools: ["R", "tidyverse", "WDI", "showtext", "scales", "ggplot2"],
      codeLink: "https://github.com/praharaaa/Tidy-Tuesday/tree/main/2018/2018-07-03",
      imageUrl: "https://raw.githubusercontent.com/praharaaa/Tidy-Tuesday/main/2018/2018-07-03/life_expectancy_during_genocide_and_wars.png",
      year: "2018",
      imageHeight: 700
    },
    {
      id: "2018-07-10",
      title: "Beer Name Patterns",
      date: "July 10, 2018",
      week: "Week 15",
      overview: "This directed graph maps sequential word chains in 2,411 beer names from the TidyTuesday dataset. Blue descriptor nodes connect to red style nodes via arrows indicating word order, with arrow thickness encoding frequency to highlight common naming conventions.",
      keyFindings: [
        "Pale Ale dominates: 'Pale' → 'Ale' is the most frequent combination, appearing more times than any other descriptor-style sequence"
      ],
      dataSource: "TidyTuesday Beers Dataset",
      tools: ["R", "tidyverse", "tidytext", "igraph", "ggraph", "showtext", "tidytuesdayR"],
      codeLink: "https://github.com/praharaaa/Tidy-Tuesday/tree/main/2018/2018-07-10",
      imageUrl: "https://raw.githubusercontent.com/praharaaa/Tidy-Tuesday/main/2018/2018-07-10/beer_name_patterns.png",
      year: "2018",
      imageHeight: 600
    },
    {
      id: "2018-07-17",
      title: "Leisure-Time Physical Activity Across 50 States",
      date: "July 17, 2018",
      week: "Week 16",
      overview: "This choropleth map visualizes the percentage of adults aged 18–64 who meet both aerobic and muscle-strengthening federal guidelines through leisure-time physical activity across the United States, segmented by sex and work status based on National Health Interview Survey data (2010–2015).",
      keyFindings: [
        "Geographic variation dominates: State location is a stronger predictor than gender or work status—Colorado, Utah, and Idaho show consistently high participation",
        "Persistent gender gap: Men maintain higher physical activity participation than women across all states and work statuses",
        "Weak work-status correlation: Some states show non-working populations with equal or higher activity rates than working populations",
        "Climate and culture matter: Mountain West states and cool-climate regions show notably higher participation"
      ],
      dataSource: "National Health Interview Survey (NHIS) Exercise Dataset",
      tools: ["R", "tidyverse", "tidytuesdayR", "sf", "tigris", "showtext", "ggtext", "scales", "cowplot", "viridis", "ggplot2"],
      codeLink: "https://github.com/praharaaa/Tidy-Tuesday/tree/main/2018/2018-07-17",
      imageUrl: "https://raw.githubusercontent.com/praharaaa/Tidy-Tuesday/main/2018/2018-07-17/Mapping_LPTA.png",
      year: "2018",
      imageHeight: 700
    },
    {
      id: "2018-07-23",
      title: "Antarctic Sea Ice Concentration (2025)",
      date: "July 23, 2018",
      week: "Week 17",
      overview: "This orthographic animation shows daily sea ice concentration changes around Antarctica from January 1 to December 31, 2025. White areas represent high ice coverage (up to 100%), fading to transparent over open ocean, with the polar projection centered on the South Pole.",
      keyFindings: [
        "Ice coverage peaks mid-winter (August-September) then retreats sharply in summer (February-March)",
        "Smooth transitions reveal weather-driven fluctuations within the broader seasonal trend"
      ],
      dataSource: "NSIDC-0803 AMSR2 Sea Ice Concentration v2.0",
      tools: ["R", "tidyverse", "terra", "sf", "rnaturalearth", "gifski", "showtext", "ggtext"],
      codeLink: "https://github.com/praharaaa/Tidy-Tuesday/tree/main/2018/2018-07-23",
      imageUrl: "https://raw.githubusercontent.com/praharaaa/Tidy-Tuesday/main/2018/2018-07-23/sea_ice_animation.gif",
      year: "2018",
      imageHeight: 600
    },
    {
      id: "2018-07-31",
      title: "What Happens to Shelter Pets After They Arrive?",
      date: "July 31, 2018",
      week: "Week 18",
      overview: "Horizontal stacked bar chart showing outcome proportions for top 5 cat and dog breeds at Dallas Animal Shelter (2016-2017). Each bar totals 100% with sample sizes displayed, highlighting stark differences in outcomes between species.",
      keyFindings: [
        "Dogs go home: 13-21% return to owner vs less than 2% for cats",
        "Cats get transferred: 28-42% transfer rate vs 10-37% for dogs",
        "Pit Bulls have the highest euthanasia rate at 41% among all breeds",
        "Domestic Short Hair Cat (6.6K) and Pit Bull Dog (5.9K) dominate shelter intake volume"
      ],
      dataSource: "Dallas Animal Shelter Outcomes Dataset",
      tools: ["R", "tidyverse", "dplyr", "ggplot2", "ggtext", "showtext", "scales"],
      codeLink: "https://github.com/praharaaa/Tidy-Tuesday/tree/main/2018/2018-07-31",
      imageUrl: "https://raw.githubusercontent.com/praharaaa/Tidy-Tuesday/main/2018/2018-07-31/dallas_animal_shelter_outcome_2017.png",
      year: "2018",
      imageHeight: 650
    },
    {
      id: "2018-08-07",
      title: "Which Airlines Improved Their Safety Records Most (1999-2014)?",
      date: "August 7, 2018",
      week: "Week 19",
      overview: "This slope chart displays safety trends for 56 airlines between 1999 and 2014. Each facet shows one airline with ribbon area from 1999 baseline to 2014 value, ordered from largest decline to biggest improvement, with red indicating increasing incidents and green showing improvement.",
      keyFindings: [
        "Japan Airlines reduced incidents by 524 (from 524 to 0)—the largest improvement",
        "Malaysia Airlines saw the largest increase (38 to 542 incidents)",
        "38 airlines improved their safety records",
        "18 airlines had worsening safety records"
      ],
      dataSource: "FiveThirtyEight Airline Safety Dataset",
      tools: ["R", "tidyverse", "showtext", "ggtext", "scales", "ggplot2"],
      codeLink: "https://github.com/praharaaa/Tidy-Tuesday/tree/main/2018/2018-08-07",
      imageUrl: "https://raw.githubusercontent.com/praharaaa/Tidy-Tuesday/main/2018/2018-08-07/airline_safety.png",
      year: "2018",
      imageHeight: 800
    },
    {
      id: "2018-08-14",
      title: "Polarized Patterns: Hashtag Usage by Left vs. Right Russian Troll Accounts",
      date: "August 14, 2018",
      week: "Week 20",
      overview: "Log-log scatterplot comparing hashtag usage between Left and Right Russian troll accounts from IRA dataset. Points show nearly 50,000 hashtags from over 3 million tweets, with size representing total mentions and 14 key hashtags highlighted.",
      keyFindings: [
        "Right trolls dominate high-volume hashtags (above diagonal line)",
        "Low-volume hashtags cluster near diagonal, showing balanced usage between both groups",
        "Total range spans from 10 to over 10,000 mentions per hashtag"
      ],
      dataSource: "IRA Russian Troll Tweets (FiveThirtyEight)",
      tools: ["R", "tidyverse", "data.table", "ggplot2", "ggtext", "ggrepel", "showtext", "scales"],
      codeLink: "https://github.com/praharaaa/Tidy-Tuesday/tree/main/2018/2018-08-14",
      imageUrl: "https://raw.githubusercontent.com/praharaaa/Tidy-Tuesday/main/2018/2018-08-14/IRA_hashtag_mapping.png",
      year: "2018",
      imageHeight: 600
    },
    {
      id: "2018-08-21",
      title: "Calling Out Those Most Responsible For California Wildfires",
      date: "August 21, 2018",
      week: "Week 21",
      overview: "Heatmap visualization showing California wildfire causes across 68 years (1950-2017). Each tile represents a month-year combination, colored by the dominant cause (Human, Natural, or Unknown) with intensity reflecting relative incident counts.",
      keyFindings: [
        "Human-caused fires dominate the wildfire season (May through September), shown by intense red shading",
        "Peak intensity occurs in summer months, particularly June through August",
        "Natural causes appear sporadically with no strong seasonal pattern",
        "Unknown causes are more common in winter months and early period (1950s-1970s)",
        "Clear seasonal demarcation: fire season shows consistently darker shades compared to off-season months"
      ],
      dataSource: "California Wildfires Dataset",
      tools: ["R", "dplyr", "ggplot2", "tidytuesdayR", "scales"],
      codeLink: "https://github.com/praharaaa/Tidy-Tuesday/tree/main/2018/2018-08-21",
      imageUrl: "https://raw.githubusercontent.com/praharaaa/Tidy-Tuesday/main/2018/2018-08-21/california_fires.png",
      year: "2018",
      imageHeight: 700
    },
    {
      id: "2018-08-28",
      title: "The Rise of Running Quarterbacks in Modern Football",
      date: "August 28, 2018",
      week: "Week 22",
      overview: "Scatter plot visualization showing NFL quarterbacks rushing performance from 2000 to 2017. Each point represents a quarterback's career stats, with total rushing touchdowns on x-axis and average yards per attempt on y-axis, highlighting standout running QBs.",
      keyFindings: [
        "Running QBs cluster low on touchdowns but high on yards per attempt efficiency",
        "Stars like Michael Vick, Cam Newton, and Colin Kaepernick dominate the top-right quadrant",
        "Traditional pocket passers form a dense cloud near origin, showing era shift",
        "Average performance sits around 2.5 yards per attempt with few touchdowns",
        "Modern trend visible: more QBs above average line post-2010"
      ],
      dataSource: "NFL Stats Dataset",
      tools: ["R", "tidyverse", "ggplot2", "tidytuesdayR", "ggtext", "scales", "ggrepel", "showtext"],
      codeLink: "https://github.com/praharaaa/Tidy-Tuesday/tree/main/2018/2018-08-28",
      imageUrl: "https://raw.githubusercontent.com/praharaaa/Tidy-Tuesday/main/2018/2018-08-28/NFL_stats.png",
      year: "2018",
      imageHeight: 600
    },
    {
      id: "2018-09-04",
      title: "Fast Food Calories Breakdown",
      date: "September 4, 2018",
      week: "Week 23",
      overview: "Beeswarm plot showing calorie content in fast food items from burgers, sandwiches, tacos, and wraps. Dots cluster by restaurant chain along a calorie axis from 0 to over 1000 calories.",
      keyFindings: [
        "Burgers often hit 500-1000 calories across chains like McDonald's, Sonic, and Burger King",
        "Tacos and wraps stay lower, mostly under 1000 calories, with Taco Bell leading in variety",
        "Sandwiches spread wide in Arby's and Subway offerings",
        "No highlighted items under 100 calories across all categories"
      ],
      dataSource: "Fast Food Calories Dataset",
      tools: ["R", "tidyverse", "ggplot2", "tidytuesdayR", "ggtext", "scales", "showtext"],
      codeLink: "https://github.com/praharaaa/Tidy-Tuesday/tree/main/2018/2018-09-04",
      imageUrl: "https://raw.githubusercontent.com/praharaaa/Tidy-Tuesday/main/2018/2018-09-04/fastfood_calories.png",
      year: "2018",
      imageHeight: 700
    },
    {
      id: "2018-09-11",
      title: "Cat vs Dog Ownership Across US States",
      date: "September 11, 2018",
      week: "Week 24",
      overview: "Choropleth map showing pet ownership dominance across the United States. States are colored by whether dog or cat owners are more prevalent, with intensity reflecting the percentile ranking within each category.",
      keyFindings: [
        "Dog owners dominate most states, especially in the South and Midwest regions (Texas, Arkansas, Mississippi, Missouri)",
        "Cat owners dominate in the Northeast (Maine, Massachusetts, Vermont) and Pacific Northwest (Washington, Oregon)",
        "Color intensity reveals not just dominance but also the strength of preference within each category",
        "Delaware shows a tie between cat and dog ownership percentages"
      ],
      dataSource: "American Veterinary Medical Association Dataset",
      tools: ["R", "tidyverse", "ggplot2", "tidytuesdayR", "ggtext", "scales", "showtext", "sf", "tigris"],
      codeLink: "https://github.com/praharaaa/Tidy-Tuesday/tree/main/2018/2018-09-11",
      imageUrl: "https://raw.githubusercontent.com/praharaaa/Tidy-Tuesday/main/2018/2018-09-11/cat_vs_dog_owner.png",
      year: "2018",
      imageHeight: 600
    },
    {
      id: "2018-09-18",
      title: "Pilot Hypoxia Risk: PaO₂ Drops Below Safe Levels at Altitude",
      date: "September 18, 2018",
      week: "Week 25",
      overview: "Line chart showing how alveolar oxygen pressure (PAO2) in the lungs decreases with altitude, using data from the Soaring magazine hypoxia table. A shaded triangle highlights the region between sea level and Mount Everest summit.",
      keyFindings: [
        "Commercial airliners cruise at 35,000-40,000 feet but cabin pressurization keeps passengers at effective altitude of 6,000-8,000 feet",
        "Above roughly 16,000-26,000 feet of effective altitude, alveolar oxygen pressure drops below safe range for clear thinking",
        "PAO2 falls from about 104 mmHg at sea level to much lower values near typical flight levels",
        "The Everest annotation helps relate extreme mountain altitude to oxygen environment pilots experience at high flight levels"
      ],
      dataSource: "Soaring Magazine Hypoxia Table (adapted from Guyton and Hall's Textbook of Medical Physiology)",
      tools: ["R", "tidyverse", "ggplot2", "tidytuesdayR", "ggtext", "scales", "showtext", "janitor"],
      codeLink: "https://github.com/praharaaa/Tidy-Tuesday/tree/main/2018/2018-09-18",
      imageUrl: "https://raw.githubusercontent.com/praharaaa/Tidy-Tuesday/main/2018/2018-09-18/pilot_hypoxia.png",
      year: "2018",
      imageHeight: 650
    },
    {
      id: "2018-09-25",
      title: "Africa Has an Invasive Species Problem",
      date: "September 25, 2018",
      week: "Week 26",
      overview: "Treemap visualization showing the most invasive genera across major kingdoms (Plantae, Animalia, Fungi, Bacteria, Chromista) recorded in Africa. Each rectangle within a facet represents a genus, sized by the number of invasive species.",
      keyFindings: [
        "A few plant genera (such as Solanum, Acacia, and Senna) account for a large share of invasive plant species in Africa",
        "In bacteria, invasions are strongly dominated by a handful of genera like Vibrio and Yersinia, suggesting important disease implications",
        "Chromista and Fungi also show clear genus-level concentration",
        "Plants play a leading role in terms of invasive species richness in this dataset"
      ],
      dataSource: "Africa Invasive Species Dataset",
      tools: ["R", "tidyverse", "ggplot2", "tidytuesdayR", "ggtext", "scales", "showtext", "treemapify", "rotl"],
      codeLink: "https://github.com/praharaaa/Tidy-Tuesday/tree/main/2018/2018-09-25",
      imageUrl: "https://raw.githubusercontent.com/praharaaa/Tidy-Tuesday/main/2018/2018-09-25/invasive_species_in_africa.png",
      year: "2018",
      imageHeight: 700
    },
    {
      id: "2018-10-02",
      title: "Twin Dates Don't Always Mean More Births",
      date: "October 2, 2018",
      week: "Week 27",
      overview: "Line chart showing US voter turnout rate from 1980 to 2014, highlighting the persistent gap between presidential and midterm elections. Presidential years consistently achieve 30-60% turnout while midterm elections drop to 15-40%. Background shading indicates Republican (red) and Democratic (blue) administrations, with vertical dashed lines marking presidential transitions.",
      keyFindings: [
        "Presidential vs Midterm pattern: Presidential elections (1980, 1984, 1988, etc.) show significantly higher turnout than midterm elections (1982, 1986, 1990, etc.), creating a clear sawtooth pattern across all administrations.",
        "Peak turnout years: 2004 and 2008 presidential elections reached the highest turnout rates in this period, both exceeding 55%.",
        "Consistent midterm drop: Midterm turnout remained relatively flat (around 15-40%) from 1982 to 2014, showing minimal improvement over three decades.",
        "Bipartisan pattern: The presidential-midterm gap holds steady across both Republican (Reagan, Bush Sr., Bush Jr.) and Democratic (Clinton, Obama) administrations, suggesting systemic factors rather than party-specific mobilization.",
        "Obama era: 2008 showed exceptional turnout but dropped sharply in the 2010 midterm, following the historical pattern."
      ],
      dataSource: "US voter turnout 1980-2014",
      tools: ["R", "tidyverse", "ggplot2", "ggrepel", "showtext", "scales", "ggtext"],
      codeLink: "https://github.com/praharaaa/Tidy-Tuesday/tree/main/2018/2018-10-09",
      imageUrl: "https://github.com/praharaaa/Tidy-Tuesday/raw/main/2018/2018-10-09/US_voter_turnout.png",
      year: "2018",
      imageHeight: 600
    },
    {
      id: "2018-10-09",
      title: "The Turnout Gap That Defines United States Election Cycles",
      date: "October 9, 2018",
      week: "Week 28",
      overview: "Scatter plot showing daily US births from 2000-2014, with special focus on twin dates (like 08-08-2008). Weekday special dates show clear spikes from scheduled C-sections, while weekend special dates have lower births. Grey points show normal weekdays and weekends for comparison.",
      keyFindings: [
        "Weekday special dates like 08-08-2008 (14k+) and 09-09-2009 show strong spikes despite 2008 recession lowering overall births",
        "Weekend special dates like 04-04-2004 and 06-06-2006 have fewer births, possibly 'bad luck' dates parents avoid",
        "Lucky exception: 07-07-2007 ('lucky seven') had high weekend births (~12k)",
        "01-01-2001 shows low births due to New Year's holiday"
      ],
      dataSource: "US Births 2000-2014 Dataset",
      tools: ["R", "tidyverse", "ggplot2", "ggrepel", "showtext", "scales", "ggtext"],
      codeLink: "https://github.com/praharaaa/Tidy-Tuesday/tree/main/2018/2018-10-02",
      imageUrl: "https://raw.githubusercontent.com/praharaaa/Tidy-Tuesday/main/2018/2018-10-02/US_birth.png",
      year: "2018",
      imageHeight: 600
    },
  ]
};
