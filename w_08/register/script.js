let participantCount = 1;

window.onload = () => {
  document.getElementById("participantCount").value = participantCount;
};
function participantTemplate(count) {
    return `
      <section class="participant${count}">
        <p>Participant ${count}</p>
        <div class="item">
          <label for="fname${count}"> First Name<span>*</span></label>
          <input id="fname${count}" type="text" name="fname${count}" required />
        </div>
        <div class="item activities">
          <label for="activity${count}">Activity #<span>*</span></label>
          <input id="activity${count}" type="text" name="activity${count}" />
        </div>
        <div class="item">
          <label for="fee${count}">Fee ($)<span>*</span></label>
          <input id="fee${count}" type="number" name="fee${count}" />
        </div>
        <div class="item">
          <label for="date${count}">Desired Date <span>*</span></label>
          <input id="date${count}" type="date" name="date${count}" />
        </div>
        <div class="item">
          <p>Grade</p>
          <select id="grade${count}">
            <option value="" disabled selected></option>
            <option value="1">1st</option>
            <option value="2">2nd</option>
            <!-- other grade options -->
            <option value="12">12th</option>
          </select>
        </div>
      </section>
    `;
  }
  document.getElementById("add").addEventListener("click", () => {
    participantCount++;
    const newParticipantHTML = participantTemplate(participantCount);
    document.getElementById("add").insertAdjacentHTML("beforebegin", newParticipantHTML);
  });
  function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements = [...feeElements];
    return feeElements.reduce((total, elem) => total + parseFloat(elem.value || 0), 0);
  }
  function successTemplate(info) {
    return `Thank you ${info.name} for registering. You have registered ${info.participantCount} participants and owe $${info.totalFees} in fees.`;
  }
  document.getElementById("registrationForm").addEventListener("submit", (event) => {
    event.preventDefault();
  
    const totalFeesAmount = totalFees();
    const adultName = document.getElementById("adult_name").value;
  
    const info = {
      name: adultName,
      participantCount: participantCount,
      totalFees: totalFeesAmount
    };
  
    document.getElementById("registrationForm").style.display = "none";
    const summaryElement = document.getElementById("summary");
    summaryElement.innerHTML = successTemplate(info);
    summaryElement.style.display = "block";
  });
  