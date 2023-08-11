/**
    @fileoverview <H5><font color="#8A8A8A">module:</font><font color="#AA6600">Team Statistics</font></H5>    
*/

function getInitParam_106510324 ()
{
    var xmlText = "<Dataset>";
    xmlText += UDModule.PROJ.getProcessXML (kInitData);
    xmlText += "</Dataset>";

    return xmlText;
}

function getSeasonParam_106510324 ()
{
    var xmlText = "<Dataset>";
    xmlText += UDModule.PROJ.getProcessXML (kSeasons);
    xmlText += getSeasonsXML_106510324 ();
    xmlText += "</Dataset>";

    return xmlText;
}

function getSeasonsXML_106510324 ()
{   
	var xmlText = "<" + kCR_LeagueId + "><id>";
	xmlText += getLeagueId_106510324 ();
    xmlText += "</id></" + kCR_LeagueId + ">";
       
    return xmlText;
}

function getTeamParam_106510324 ()
{
    var xmlText = "<Dataset>";
    xmlText += UDModule.PROJ.getProcessXML (kTeams);
    xmlText += getTeamsXML_106510324 ();
    xmlText += "</Dataset>";

    return xmlText;
}

function getTeamsXML_106510324 ()
{   
	var xmlText = "<" + kCR_Teams + "><id>";
	xmlText += getLeagueId_106510324 () + UDModule.Gk_DATA_SEP;
	xmlText += getSeasonId_106510324 ();
    xmlText += "</id></" + kCR_Teams + ">";
       
    return xmlText;
}

function getTeamStatsParam_106510324 ()
{
    var xmlText = "<Dataset>";
    xmlText += UDModule.PROJ.getProcessXML (kTeamStats);
    xmlText += getTeamStatsXML_106510324 ();
    xmlText += getLeagueListXML_106510324 ();
    xmlText += "</Dataset>";

    return xmlText;
}

function getTeamStatsXML_106510324 ()
{
    var objStats = new TeamStatsObj_EG ();

    var nReportTypeId = objStats.kRT_TeamInSeason;
    var nATeamId = getTeamId_106510324 ();
    var nBTeamId = 0;
    var nAgainstTeamId = 0;
    var handicapId = 0;
    var nOrderBy = objStats.kOB_MatchDate;
    
	var xmlText = "<" + kCR_TeamStats + "><id>";
	xmlText += T6_TeamStats + UDModule.Gk_DATA_SEP;
	xmlText += kSR_TeamStats + UDModule.Gk_DATA_SEP;
	xmlText += nReportTypeId + UDModule.Gk_DATA_SEP;
    xmlText += getLeagueId_106510324 () + UDModule.Gk_DATA_SEP;
    xmlText += getSeasonId_106510324 () + UDModule.Gk_DATA_SEP;
    xmlText += getTeamId_106510324 () + UDModule.Gk_DATA_SEP;
    xmlText += nATeamId + UDModule.Gk_DATA_SEP;
    xmlText += nBTeamId + UDModule.Gk_DATA_SEP;
    xmlText += nAgainstTeamId + UDModule.Gk_DATA_SEP;
    xmlText += handicapId + UDModule.Gk_DATA_SEP;
    xmlText += nOrderBy;
    xmlText += "</id></" + kCR_TeamStats + ">";
    
    objStats = null;

    return xmlText;
}

function getLeagueListXML_106510324 ()
{  	
    var oTeamIds = 0;
    var nLastMatches = 0;
	var oStartDate = "0000-00-00";
    var oEndDate = oStartDate;
    
	var xmlText = "<" + kCR_LeagueTable + "><id>";
	xmlText += T6_LeagueTable + UDModule.Gk_DATA_SEP;
	xmlText += kSR_LeagueTable + UDModule.Gk_DATA_SEP;
    xmlText += getLeagueId_106510324 () + UDModule.Gk_DATA_SEP;
	xmlText += getSeasonId_106510324 () + UDModule.Gk_DATA_SEP;
	xmlText += oTeamIds + UDModule.Gk_DATA_SEP;
	xmlText += nLastMatches + UDModule.Gk_DATA_SEP;
	xmlText += oStartDate + UDModule.Gk_DATA_SEP;
	xmlText += oEndDate;
    xmlText += "</id></" + kCR_LeagueTable + ">";
             
    return xmlText;
}