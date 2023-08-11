/**
    @fileoverview <H5><font color="#8A8A8A">module:</font><font color="#AA6600">Team Statistics Ex</font></H5>    
*/

function getInitParam_106510325 ()
{
    var xmlText = "<Dataset>";
    xmlText += UDModule.PROJ.getProcessXML (kInitData);
    xmlText += "</Dataset>";

    return xmlText;
}

function getSeasonParam_106510325 ()
{
    var xmlText = "<Dataset>";
    xmlText += UDModule.PROJ.getProcessXML (kSeasons);
    xmlText += getSeasonsXML_106510325 ();
    xmlText += "</Dataset>";

    return xmlText;
}

function getSeasonsXML_106510325 ()
{   
	var xmlText = "<" + kCR_LeagueId + "><id>";
	xmlText += getLeagueId_106510325 ();
    xmlText += "</id></" + kCR_LeagueId + ">";
       
    return xmlText;
}

function getTeamParam_106510325 ()
{
    var xmlText = "<Dataset>";
    xmlText += UDModule.PROJ.getProcessXML (kTeams);
    xmlText += getTeamsXML_106510325 ();
    xmlText += "</Dataset>";

    return xmlText;
}

function getTeamsXML_106510325 ()
{   
	var xmlText = "<" + kCR_Teams + "><id>";
	xmlText += getLeagueId_106510325 () + UDModule.Gk_DATA_SEP;
	xmlText += getSeasonId_106510325 ();
    xmlText += "</id></" + kCR_Teams + ">";
       
    return xmlText;
}

function getTeamStatsParam_106510325 ()
{
    var xmlText = "<Dataset>";
    xmlText += UDModule.PROJ.getProcessXML (kTeamStatsEx);
    xmlText += getTeamResultStatsXML_106510325 ();
    xmlText += getLeagueResultStatsXML_106510325 ();
	xmlText += getLeagueTableXML_106510325 ();
    xmlText += "</Dataset>";

    return xmlText;
}

function getTeamResultStatsXML_106510325 ()
{    
    var nHandicapTypeId = 0;
    
	var xmlText = "<" + kCR_Team_RS + "><id>";
	xmlText += T6_Team_RS + UDModule.Gk_DATA_SEP;
	xmlText += kSR_Team_RS + UDModule.Gk_DATA_SEP;
    xmlText += getLeagueId_106510325 () + UDModule.Gk_DATA_SEP;
    xmlText += getTeamId_106510325 () + UDModule.Gk_DATA_SEP;
    xmlText += nHandicapTypeId;
    xmlText += "</id></" + kCR_Team_RS + ">";
 
    return xmlText;
}

function getLeagueResultStatsXML_106510325 ()
{    
    var objStats = new HdpResultStatsObj_EE ();
    var nTeamId = 0;
    
	var xmlText = "<" + kCR_League_RS + "><id>";
	xmlText += T6_League_RS + UDModule.Gk_DATA_SEP;
	xmlText += kSR_League_RS + UDModule.Gk_DATA_SEP;
    xmlText += getLeagueId_106510325 () + UDModule.Gk_DATA_SEP;
    xmlText += nTeamId + UDModule.Gk_DATA_SEP;
    xmlText += objStats.kHT_Favorite;
    xmlText += "</id></" + kCR_League_RS + ">";
 
    return xmlText;
}

function getLeagueTableXML_106510325 ()
{  	
    var oTeamIds = 0;
    var nLastMatches = 0;
	var oStartDate = "0000-00-00";
    var oEndDate = oStartDate;
    
	var xmlText = "<" + kCR_LeagueTable + "><id>";
	xmlText += T5_LeagueTable + UDModule.Gk_DATA_SEP;
	xmlText += kSR_LeagueTable + UDModule.Gk_DATA_SEP;
    xmlText += getLeagueId_106510325 () + UDModule.Gk_DATA_SEP;
	xmlText += getSeasonId_106510325 () + UDModule.Gk_DATA_SEP;
	xmlText += oTeamIds + UDModule.Gk_DATA_SEP;
	xmlText += nLastMatches + UDModule.Gk_DATA_SEP;
	xmlText += oStartDate + UDModule.Gk_DATA_SEP;
	xmlText += oEndDate;
    xmlText += "</id></" + kCR_LeagueTable + ">";
             
    return xmlText;
}
