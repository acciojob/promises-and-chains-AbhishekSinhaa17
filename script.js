//your JS code here. If required.
 const form = document.getElementById('voteForm');
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const btn = document.getElementById('btn');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = (nameInput.value || '').trim();
      const ageVal = ageInput.value;

      // Validate presence of both fields
      if (!name || ageVal === '' || ageVal === null) {
        alert('Please enter valid details.');
        return;
      }

      const age = Number(ageVal);
      if (Number.isNaN(age)) {
        alert('Please enter valid details.');
        return;
      }

      btn.disabled = true;

      const checkVotingEligibility = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (age >= 18) {
            resolve();
          } else {
            reject();
          }
        }, 4000);
      });

      checkVotingEligibility
        .then(() => {
          alert(`Welcome, ${name}. You can vote.`);
        })
        .catch(() => {
          alert(`Oh sorry ${name}. You aren't old enough.`);
        })
        .finally(() => {
          btn.disabled = false;
        });
    });