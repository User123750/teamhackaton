document.addEventListener("DOMContentLoaded", () => {
  // Navigation
  const navLinks = document.querySelectorAll(".nav-links a")
  const loginBtn = document.getElementById("login-btn")
  const registerBtn = document.getElementById("register-btn")
  const discoverBtn = document.getElementById("discover-btn")
  const registerHeroBtn = document.getElementById("register-hero-btn")
  const kiosksLink = document.getElementById("kiosks-link")
  const pricingLink = document.getElementById("pricing-link")
  const contactLink = document.getElementById("contact-link")
  const menuToggle = document.querySelector(".menu-toggle")

  // Pages
  const pages = document.querySelectorAll(".page")
  const homePage = document.getElementById("home-page")
  const authPage = document.getElementById("auth-page")
  const mapPage = document.getElementById("map-page")
  const rentalPage = document.getElementById("rental-page")
  const profilePage = document.getElementById("profile-page")
  const contactPage = document.getElementById("contact-page")

  // Auth Forms
  const authTabs = document.querySelectorAll(".auth-tab")
  const loginForm = document.getElementById("login-form")
  const registerForm = document.getElementById("register-form")

  // Map Elements
  const kioskMarkers = document.querySelectorAll(".kiosk-marker")
  const kioskPopup = document.getElementById("kiosk-popup")
  const closeKioskPopup = kioskPopup.querySelector(".close-popup")
  const reserveBtn = kioskPopup.querySelector(".reserve-btn")
  const rentBtn = document.querySelector(".rent-btn")
  const filterBtns = document.querySelectorAll(".filter-btn")

  // Weather Elements
  const weatherLocation = document.querySelector(".weather-location")
  const weatherTemp = document.querySelector(".weather-temp .temp")
  const weatherFeelsLike = document.querySelector(".weather-temp .feels-like")
  const weatherIcon = document.querySelector(".weather-icon i")
  const weatherDetails = document.querySelectorAll(".weather-detail span")
  const forecastItems = document.querySelectorAll(".forecast-item")

  // Simulate weather data update
  function updateWeather() {
    // This would normally fetch data from a weather API
    const weatherData = {
      location: "Paris, France",
      temperature: Math.floor(Math.random() * 10) + 15, // Random temp between 15-25°C
      feelsLike: Math.floor(Math.random() * 10) + 17,
      condition: "Ensoleillé",
      wind: Math.floor(Math.random() * 20) + 5,
      humidity: Math.floor(Math.random() * 50) + 20,
      forecast: [
        { day: "Aujourd'hui", temp: Math.floor(Math.random() * 10) + 15, condition: "sun" },
        { day: "Demain", temp: Math.floor(Math.random() * 10) + 15, condition: "cloud-sun" },
        { day: "Mer", temp: Math.floor(Math.random() * 10) + 15, condition: "cloud" },
        { day: "Jeu", temp: Math.floor(Math.random() * 10) + 15, condition: "cloud-rain" },
      ],
    }

    // Update weather display
    weatherLocation.textContent = weatherData.location
    weatherTemp.textContent = `${weatherData.temperature}°C`
    weatherFeelsLike.textContent = `Ressenti: ${weatherData.feelsLike}°C`

    // Update weather details
    weatherDetails[0].textContent = `${weatherData.wind} km/h`
    weatherDetails[1].textContent = `${weatherData.humidity}%`
    weatherDetails[2].textContent = weatherData.condition

    // Update forecast
    weatherData.forecast.forEach((day, index) => {
      const forecastTemp = forecastItems[index].querySelector(".temp")
      const forecastIcon = forecastItems[index].querySelector("i")

      forecastTemp.textContent = `${day.temp}°C`
      forecastIcon.className = `fas fa-${day.condition}`
    })
  }

  // Rental Process
  const rentalSteps = document.querySelectorAll(".step")
  const rentalStepContents = document.querySelectorAll(".rental-step-content")
  const nextBtns = document.querySelectorAll(".next-btn")
  const backBtns = document.querySelectorAll(".back-btn")
  const bikeCards = document.querySelectorAll(".bike-card")
  const durationCards = document.querySelectorAll(".duration-card")
  const paymentMethods = document.querySelectorAll(".payment-method")
  const confirmBtn = document.querySelector(".confirm-btn")
  const confirmationPopup = document.getElementById("confirmation-popup")
  const closeConfirmationPopup = confirmationPopup.querySelector(".close-popup")

  // Profile Elements
  const profileTabs = document.querySelectorAll(".profile-tab")
  const profileTabContents = document.querySelectorAll(".profile-tab-content")
  const darkModeToggle = document.getElementById("dark-mode-toggle")
  const saveSettingsBtn = document.querySelector(".save-settings")
  const logoutBtn = document.querySelector(".logout")

  // Contact Elements
  const faqQuestions = document.querySelectorAll(".faq-question")

  // Navigation Functions
  function showPage(pageId) {
    pages.forEach((page) => {
      page.classList.remove("active")
    })
    document.getElementById(pageId).classList.add("active")

    // Update active nav link
    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href") === "#" + pageId) {
        link.classList.add("active")
      }
    })

    // Scroll to top
    window.scrollTo(0, 0)
  }

  // Auth Tab Functions
  function showAuthTab(tabId) {
    authTabs.forEach((tab) => {
      tab.classList.remove("active")
      if (tab.getAttribute("data-tab") === tabId) {
        tab.classList.add("active")
      }
    })

    loginForm.classList.remove("active")
    registerForm.classList.remove("active")

    if (tabId === "login") {
      loginForm.classList.add("active")
    } else {
      registerForm.classList.add("active")
    }
  }

  // Rental Step Functions
  function showRentalStep(stepNumber) {
    rentalSteps.forEach((step) => {
      step.classList.remove("active")
      if (step.getAttribute("data-step") === stepNumber) {
        step.classList.add("active")
      }
    })

    rentalStepContents.forEach((content) => {
      content.classList.remove("active")
      if (content.getAttribute("data-step") === stepNumber) {
        content.classList.add("active")
      }
    })
  }

  // Profile Tab Functions
  function showProfileTab(tabId) {
    profileTabs.forEach((tab) => {
      tab.classList.remove("active")
      if (tab.getAttribute("data-tab") === tabId) {
        tab.classList.add("active")
      }
    })

    profileTabContents.forEach((content) => {
      content.classList.remove("active")
      if (content.id === tabId + "-tab") {
        content.classList.add("active")
      }
    })
  }

  // Event Listeners

  // Navigation
  loginBtn.addEventListener("click", () => {
    showPage("auth-page")
    showAuthTab("login")
  })

  registerBtn.addEventListener("click", () => {
    showPage("auth-page")
    showAuthTab("register")
  })

  discoverBtn.addEventListener("click", () => {
    showPage("map-page")
  })

  registerHeroBtn.addEventListener("click", () => {
    showPage("auth-page")
    showAuthTab("register")
  })

  kiosksLink.addEventListener("click", () => {
    showPage("map-page")
  })

  contactLink.addEventListener("click", () => {
    showPage("contact-page")
  })

  // Auth Tabs
  authTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      showAuthTab(tab.getAttribute("data-tab"))
    })
  })

  // Map Interactions
  kioskMarkers.forEach((marker) => {
    marker.addEventListener("click", () => {
      kioskPopup.classList.add("active")
    })
  })

  closeKioskPopup.addEventListener("click", () => {
    kioskPopup.classList.remove("active")
  })

  reserveBtn.addEventListener("click", () => {
    kioskPopup.classList.remove("active")
    showPage("rental-page")
    showRentalStep("1")
  })

  rentBtn.addEventListener("click", () => {
    showPage("rental-page")
    showRentalStep("1")
  })

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")

      const filter = btn.getAttribute("data-filter")
      // Filter logic would go here
    })
  })

  // Rental Process
  nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const nextStep = btn.getAttribute("data-next")
      showRentalStep(nextStep)
    })
  })

  backBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const prevStep = btn.getAttribute("data-prev")
      if (prevStep) {
        showRentalStep(prevStep)
      } else {
        showPage("map-page")
      }
    })
  })

  bikeCards.forEach((card) => {
    card.addEventListener("click", () => {
      bikeCards.forEach((c) => c.classList.remove("selected"))
      card.classList.add("selected")
    })
  })

  durationCards.forEach((card) => {
    card.addEventListener("click", () => {
      durationCards.forEach((c) => c.classList.remove("selected"))
      card.classList.add("selected")
    })
  })

  paymentMethods.forEach((method) => {
    method.addEventListener("click", () => {
      paymentMethods.forEach((m) => m.classList.remove("selected"))
      method.classList.add("selected")
      const radio = method.querySelector('input[type="radio"]')
      radio.checked = true
    })
  })

  confirmBtn.addEventListener("click", () => {
    confirmationPopup.classList.add("active")

    // Start the timer
    let timeLeft = 30 * 60 // 30 minutes in seconds
    const timerElement = document.getElementById("rental-timer")

    const timerInterval = setInterval(() => {
      const minutes = Math.floor(timeLeft / 60)
      const seconds = timeLeft % 60

      timerElement.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`

      if (timeLeft <= 0) {
        clearInterval(timerInterval)
        timerElement.textContent = "00:00"
      }

      timeLeft--
    }, 1000)
  })

  closeConfirmationPopup.addEventListener("click", () => {
    confirmationPopup.classList.remove("active")
    showPage("profile-page")
    showProfileTab("history")
  })

  // Profile Interactions
  profileTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      showProfileTab(tab.getAttribute("data-tab"))
    })
  })

  darkModeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode")
  })

  saveSettingsBtn.addEventListener("click", () => {
    // Save settings logic would go here
    alert("Paramètres enregistrés avec succès !")
  })

  logoutBtn.addEventListener("click", () => {
    showPage("home-page")
  })

  // FAQ Interactions
  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling
      answer.classList.toggle("active")

      const icon = question.querySelector("i")
      if (answer.classList.contains("active")) {
        icon.classList.remove("fa-chevron-down")
        icon.classList.add("fa-chevron-up")
      } else {
        icon.classList.remove("fa-chevron-up")
        icon.classList.add("fa-chevron-down")
      }
    })
  })

  // Mobile Menu Toggle
  menuToggle.addEventListener("click", () => {
    const navLinks = document.querySelector(".nav-links")
    navLinks.classList.toggle("active")
  })

  // Initialize the app
  showPage("home-page")
  updateWeather()
})
