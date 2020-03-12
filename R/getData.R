library(alphavantager)
library(readxl)
library(jsonlite)
library(lubridate)

### evropa

firmy <- data.frame(ticker=c("^STOXX"), nazev=c("STOXX 600"))

export <- vector("list", nrow(firmy))
result <- vector("list", 2) 

for (i in 1:nrow(firmy)) {
  data <- av_get(symbol = as.character(firmy[i,1]), av_fun = "TIME_SERIES_DAILY_ADJUSTED", outputsize = "full")
  name <- firmy[i,2]
  result[[1]] <- name
  y <- data$adjusted_close
  x <- as.numeric((as_date(data$timestamp))) * 86400000
  y <- y[(length(x)-sum(as_date(data$timestamp) > as_date("2019-01-01"))):length(x)]
  x <- x[(length(x)-sum(as_date(data$timestamp) > as_date("2019-01-01"))):length(x)]
  dvojice <- vector("list",length(y))
  for (j in 1:length(y)) {
    dvojice[[j]] <- c(x[j], y[j])
  }
  result[[2]] <- dvojice
  names(result) <- c("name", "data")
  export[[i]] <- result
  print(i)
  #Sys.sleep(10)
}

write(paste0("export let stoxxData = ", toJSON(export), ";"), "../js/stoxx.js")




### akcie, které stoupají

firmy <- read_excel("akcie-stoupaji.xlsx")

export <- vector("list", nrow(firmy))
result <- vector("list", 2) 

for (i in 1:nrow(firmy)) {
  data <- av_get(symbol = as.character(firmy[i,1]), av_fun = "TIME_SERIES_DAILY_ADJUSTED", outputsize = "compact")
  name <- paste0(firmy[i,2], ", ", firmy[i,3])
  result[[1]] <- name
  y <- data$adjusted_close
  x <- as.numeric((as_date(data$timestamp))) * 86400000
  y <- y[(length(x)-sum(as_date(data$timestamp) > as_date("2020-01-02"))):length(x)]
  x <- x[(length(x)-sum(as_date(data$timestamp) > as_date("2020-01-02"))):length(x)]
  dvojice <- vector("list",length(y))
  for (j in 1:length(y)) {
    dvojice[[j]] <- c(x[j], y[j])
  }
  result[[2]] <- dvojice
  names(result) <- c("name", "data")
  export[[i]] <- result
  print(i)
  #Sys.sleep(10)
}

write(toJSON(export), "posiluji.json")

### index paniky

firmy <- data.frame(ticker=c("^VIX"), nazev=c("VIX - index volatility"))

export <- vector("list", nrow(firmy))
result <- vector("list", 2) 

for (i in 1:nrow(firmy)) {
  data <- av_get(symbol = as.character(firmy[i,1]), av_fun = "TIME_SERIES_DAILY_ADJUSTED", outputsize = "compact")
  name <- firmy[i,2]
  result[[1]] <- name
  y <- data$adjusted_close
  x <- as.numeric((as_date(data$timestamp))) * 86400000
  y <- y[(length(x)-sum(as_date(data$timestamp) > as_date("2020-01-02"))):length(x)]
  x <- x[(length(x)-sum(as_date(data$timestamp) > as_date("2020-01-02"))):length(x)]
  dvojice <- vector("list",length(y))
  for (j in 1:length(y)) {
    dvojice[[j]] <- c(x[j], y[j])
  }
  result[[2]] <- dvojice
  names(result) <- c("name", "data")
  export[[i]] <- result
  print(i)
  #Sys.sleep(10)
}

write(toJSON(export), "vix.json")

### zlato

firmy <- data.frame(ticker=c("GLD"), nazev=c("zlato (SPDR Gold Shares)"))

export <- vector("list", nrow(firmy))
result <- vector("list", 2) 

for (i in 1:nrow(firmy)) {
  data <- av_get(symbol = as.character(firmy[i,1]), av_fun = "TIME_SERIES_DAILY_ADJUSTED", outputsize = "full")
  name <- firmy[i,2]
  result[[1]] <- name
  y <- data$adjusted_close
  x <- as.numeric((as_date(data$timestamp))) * 86400000
  y <- y[(length(x)-sum(as_date(data$timestamp) > as_date("2007-01-03"))):length(x)]
  x <- x[(length(x)-sum(as_date(data$timestamp) > as_date("2006-01-03"))):length(x)]
  dvojice <- vector("list",length(y))
  for (j in 1:length(y)) {
    dvojice[[j]] <- c(x[j], y[j])
  }
  result[[2]] <- dvojice
  names(result) <- c("name", "data")
  export[[i]] <- result
  print(i)
  #Sys.sleep(10)
}

write(toJSON(export), "zlato.json")
