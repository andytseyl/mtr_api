document.addEventListener("DOMContentLoaded", function () {
  const lines = {
    KTL: {
      text: "觀塘線",
      color: "#7ed957",
      sta: [
        { code: "WHA", name: "Whampoa" },
        { code: "HOM", name: "Ho Man Tin" },
        { code: "YMT", name: "Yau Ma Tei" },
        { code: "MOK", name: "Mong Kok" },
        { code: "PRE", name: "Prince Edward" },
        { code: "SKM", name: "Shek Kip Mei" },
        { code: "KOT", name: "Kowloon Tong" },
        { code: "LOF", name: "Lok Fu" },
        { code: "WTS", name: "Wong Tai Sin" },
        { code: "DIH", name: "Diamond Hill" },
        { code: "CHH", name: "Choi Hung" },
        { code: "KOB", name: "Kowloon Bay" },
        { code: "NTK", name: "Ngau Tau Kok" },
        { code: "KWT", name: "Kwun Tong" },
        { code: "LAT", name: "Lam Tin" },
        { code: "YAT", name: "Yau Tong" },
        { code: "TIK", name: "Tiu Keng Leng" },
      ],
    },
    ISL: {
      text: "港島線",
      color: "#004aad",
      sta: [
        { code: "KET", name: "Kennedy Town" },
        { code: "HKU", name: "HKU" },
        { code: "SYP", name: "Sai Ying Pun" },
        { code: "SHW", name: "Sheung Wan" },
        { code: "CEN", name: "Central" },
        { code: "ADM", name: "Admiralty" },
        { code: "WAC", name: "Wan Chai" },
        { code: "CAB", name: "Causeway Bay" },
        { code: "TIH", name: "Tin Hau" },
        { code: "FOH", name: "Fortress Hill" },
        { code: "NOP", name: "North Point" },
        { code: "QUB", name: "Quarry Bay" },
        { code: "TAK", name: "Tai Koo" },
        { code: "SWH", name: "Sai Wan Ho" },
        { code: "SKW", name: "Shau Kei Wan" },
        { code: "HFC", name: "Heng Fa Chuen" },
        { code: "CHW", name: "Chai Wan" },
      ],
    },
    TWL: {
      text: "荃灣線",
      color: "#ff3131",
      sta: [
        { code: "CEN", name: "Central" },
        { code: "ADM", name: "Admiralty" },
        { code: "TST", name: "Tsim Sha Tsui" },
        { code: "JOR", name: "Jordan" },
        { code: "YMT", name: "Yau Ma Tei" },
        { code: "MOK", name: "Mong Kok" },
        { code: "PRE", name: "Price Edward" },
        { code: "SSP", name: "Sham Shui Po" },
        { code: "CSW", name: "Cheung Sha Wan" },
        { code: "LCK", name: "Lai Chi Kok" },
        { code: "MEF", name: "Mei Foo" },
        { code: "LAK", name: "Lai King" },
        { code: "KWF", name: "Kwai Fong" },
        { code: "KWH", name: "Kwai Hing" },
        { code: "TWH", name: "Tai Wo Hau" },
        { code: "TSW", name: "Tsuen Wan" },
      ],
    },
    SIL: {
      text: "南港島線",
      color: "#cbcd09",
      sta: [
        { code: "ADM", name: "Admiralty" },
        { code: "OCP", name: "Ocean Park" },
        { code: "WCH", name: "Wong Chuk Hang" },
        { code: "LET", name: "Lei Tung" },
        { code: "SOH", name: "South Horizons" },
      ],
    },
    TCL: {
      text: "東涌線",
      color: "#f6943d",
      sta: [
        { code: "HOK", name: "Hong Kong" },
        { code: "KOW", name: "Kowloon" },
        { code: "OLY", name: "Olympic" },
        { code: "NAC", name: "Nam Cheong" },
        { code: "LAK", name: "Lai King" },
        { code: "TSY", name: "Tsing Yi" },
        { code: "SUN", name: "Sunny Bay" },
        { code: "TUC", name: "Tung Chung" },
      ],
    },
    EAL: {
      text: "東鐵線",
      color: "#5ce1e6",
      sta: [
        { code: "ADM", name: "Admiralty" },
        { code: "EXC", name: "Exhibition Centre" },
        { code: "HUH", name: "Hung Hom" },
        { code: "MKK", name: "Mong Kok East" },
        { code: "KOT", name: "Kowloon Tong" },
        { code: "TAW", name: "Tai Wai" },
        { code: "SHT", name: "Sha Tin" },
        { code: "FOT", name: "Fo Tan" },
        { code: "RAC", name: "Racecourse" },
        { code: "UNI", name: "University" },
        { code: "TAP", name: "Tai Po Market" },
        { code: "TWO", name: "Tai Wo" },
        { code: "FAN", name: "Fanling" },
        { code: "SHS", name: "Sheung Shui" },
        { code: "LOW", name: "Lo Wu" },
        { code: "LMC", name: "Lok Ma Chau" },
      ],
    },
    TML: {
      text: "屯馬線",
      color: "#8d6019",
      sta: [
        { code: "WKS", name: "Wu Kai Sha" },
        { code: "MOS", name: "Ma On Shan" },
        { code: "HEO", name: "Heng On" },
        { code: "TSH", name: "Tai Shui Hang" },
        { code: "SHM", name: "Shek Mun" },
        { code: "CIO", name: "City One" },
        { code: "STW", name: "Sha Tin Wai" },
        { code: "CKT", name: "Che Kung Temple" },
        { code: "TAW", name: "Tai Wai" },
        { code: "HIK", name: "Hin Keng" },
        { code: "DIH", name: "Diamond Hill" },
        { code: "KAT", name: "Kai Tak" },
        { code: "SUW", name: "Sung Wong Toi" },
        { code: "TKW", name: "To Kwa Wan" },
        { code: "HOM", name: "Ho Man Tin" },
        { code: "HUH", name: "Hung Hom" },
        { code: "ETS", name: "East Tsim Sha Tsui" },
        { code: "AUS", name: "Austin" },
        { code: "NAC", name: "Nam Cheong" },
        { code: "MEF", name: "Mei Foo" },
        { code: "TWW", name: "Tsuen Wan West" },
        { code: "KSR", name: "Kam Sheung Road" },
        { code: "YUL", name: "Yuen Long" },
        { code: "LOP", name: "Long Ping" },
        { code: "TIS", name: "Tin Shui Wai" },
        { code: "SIH", name: "Siu Hong" },
        { code: "TUM", name: "Tuen Mun" },
      ],
    },
    AEL: {
      text: "機場快線",
      color: "#3d9ea0",
      sta: [
        { code: "HOK", name: "Hong Kong" },
        { code: "KOW", name: "Kowloon" },
        { code: "TSY", name: "Tsing Yi" },
        { code: "AIR", name: "Airport" },
        { code: "AWE", name: "AsiaWorld Expo" },
      ],
    },
    TKL: {
      text: "將軍澳線",
      color: "#8d45ab",
      sta: [
        { code: "NOP", name: "North Point" },
        { code: "QUB", name: "Quarry Bay" },
        { code: "YAT", name: "Yau Tong" },
        { code: "TIK", name: "Tiu Keng Leng" },
        { code: "TKO", name: "Tseung Kwan O" },
        { code: "LHP", name: "LOHAS Park" },
        { code: "HAH", name: "Hang Hau" },
        { code: "POA", name: "Po Lam" },
      ],
    },
  };

  async function transport(line, sta) {
    let api = `https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php?line=${line}&sta=${sta}`;
    try {
      const response = await fetch(api);
      const result = await response.json();

      if (result.data && result.data[`${line}-${sta}`]) {
        const upInfo = result.data[`${line}-${sta}`].UP[0];
        const downInfo = result.data[`${line}-${sta}`].DOWN[0];
        const systime = result.sys_time;

        return { upInfo, downInfo, systime };
      }
    } catch (error) {
      console.error("Error data:", error);
    }
    return null;
  }

  const infoContainerLeft = document.getElementById("containerLeft");
  const infoContainerRight = document.getElementById("containerRight");
  const timeUpdateInfo = document.getElementById("lastUpdateTime");

  async function displayTheLineInfo(linesKey) {
    infoContainerLeft.innerHTML = "";
    infoContainerRight.innerHTML = "";
    timeUpdateInfo.innerHTML = "";

    const line = lines[linesKey];
    const staCode = line.sta.map((station) => station.code);

    let lastUpdateTime = "";

    for (const code of staCode) {
      const allInfo = await transport(linesKey, code);
      if (allInfo) {
        const { upInfo, downInfo, systime } = allInfo;

        if (!lastUpdateTime) {
          lastUpdateTime = systime;
        }

        const stationName = line.sta.find(
          (station) => station.code === code
        ).name;

        const upStaName = line.sta.find(
          (station) => station.code === upInfo.dest
        ).name;
        const downStaName = line.sta.find(
          (station) => station.code === downInfo.dest
        ).name;

        function formatTime(timeString) {
          const date = new Date(timeString);
          const hours = String(date.getHours()).padStart(2, "0");
          const minutes = String(date.getMinutes()).padStart(2, "0");
          return `${hours}:${minutes}`;
        }

        const upTime = formatTime(upInfo.time);
        const downTime = formatTime(downInfo.time);

        const newDiv1 = document.createElement("div");
        newDiv1.className =
          "font-semibold bg-green-400 rounded-xl border-4 flex flex-col text-white leading-loose p-4 h-40 min-w-56 mb-10";
        newDiv1.innerHTML = `
        <h3>現時在 ${stationName}</h3>
        <p>想往${upStaName}方向</p>
        <p>請去月台: ${upInfo.plat}</p> 
        <p>下班列車到達時間: ${upTime}</p> 
        
        `;
        infoContainerLeft.appendChild(newDiv1);

        const newDiv2 = document.createElement("div");
        newDiv2.className =
          "font-semibold bg-blue-400 rounded-xl border-4 flex flex-col text-white leading-loose p-4 h-40 min-w-56 mb-10";
        newDiv2.innerHTML = `
        <h3>現時在 ${stationName}</h3>
        <p>想往 ${downStaName}方向</p>
        <p>請去月台: ${downInfo.plat}</p>
        <p>下班列車到達時間: ${downTime}</p>
        `;
        infoContainerRight.appendChild(newDiv2);
      }
    }
    const updateTimeDiv = document.createElement("div");
    updateTimeDiv.className = "";
    updateTimeDiv.innerHTML = `最後更新時間為: ${lastUpdateTime}`;
    timeUpdateInfo.appendChild(updateTimeDiv);
  }

  document.getElementById("ktl").addEventListener("click", function () {
    displayTheLineInfo("KTL");
  });
  document.getElementById("isl").addEventListener("click", function () {
    displayTheLineInfo("ISL");
  });
  document.getElementById("twl").addEventListener("click", function () {
    displayTheLineInfo("TWL");
  });
  document.getElementById("sil").addEventListener("click", function () {
    displayTheLineInfo("SIL");
  });
  document.getElementById("tcl").addEventListener("click", function () {
    displayTheLineInfo("TCL");
  });
  document.getElementById("eal").addEventListener("click", function () {
    displayTheLineInfo("EAL");
  });
  document.getElementById("tml").addEventListener("click", function () {
    displayTheLineInfo("TML");
  });
  document.getElementById("ael").addEventListener("click", function () {
    displayTheLineInfo("AEL");
  });
  document.getElementById("tkl").addEventListener("click", function () {
    displayTheLineInfo("TKL");
  });
});
