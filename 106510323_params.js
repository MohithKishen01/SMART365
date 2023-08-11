/**
    @fileoverview <H5><font color="#8A8A8A">module:</font><font color="#AA6600">Team(s) H/A Goal %</font></H5>    
*/

function getInitParam_106510323 ()
{
    var xmlText = "<Dataset>";
    xmlText += UDModule.PROJ.getProcessXML (kInitData);
    xmlText += "</Dataset>";

    return xmlText;
}

function getSeasonParam_106510323 ()
{
	var xmlText = "<DataSet>";
	xmlText += UDModule.PROJ.getProcessXML (kSeasons);
	xmlText += getSeasonXML_106510323 ();
	xmlText += "</DataSet>";

	return xmlText;
}

function getSeasonXML_106510323 ()
{
    var xmlText = "<" + kCR_LeagueId + "><id>";	
	xmlText += getLeagueId_106510323 ();
    xmlText += "</id></" + kCR_LeagueId + ">";

    return xmlText;
}

function getTeamsParam_106510323 ()
{
	var xmlText = "<DataSet>";
	xmlText += UDModule.PROJ.getProcessXML (kTeams);
	xmlText += getTeamsXML_106510323 ();
	xmlText += "</DataSet>";

	return xmlText;
}

function getTeamsXML_106510323 ()
{
    var xmlText = "<" + kCR_SeasonId + "><id>";	
	xmlText += getLeagueId_106510323 () + UDModule.Gk_DATA_SEP;
	xmlText += getSeasonId_106510323 ();
    xmlText += "</id></" + kCR_SeasonId + ">";

    return xmlText;
}

function getTeamHAGoalPercentParam_106510323 ()
{
    var xmlText = "<Dataset>";
    xmlText += UDModule.PROJ.getProcessXML (kTeamOD);
    xmlText += getTeamODListXML_106510323 ();
	xmlText += getLeagueListXML_106510323 ();
    xmlText += "</Dataset>";

    return xmlText;
}

function getTeamODListXML_106510323 ()
{  	
	var arrTeamIds = getSelectedIds_TL_106510323 ();
    var oTeamIds = arrTeamIds.length > 0 ? arrTeamIds.join (",") : "0";

	var objTeamOD = new TeamODObj_DI ();

	var xmlText = "<" + kCR_TeamOD_FLTR + ">";
	xmlText += "<id>";	
	xmlText += objTeamOD.kRT_Offense + UDModule.Gk_DATA_SEP;
	xmlText += objTeamOD.kTT_Home + UDModule.Gk_DATA_SEP;
	xmlText += T6_TeamOD + UDModule.Gk_DATA_SEP;
	xmlText += kSR_ListHO + UDModule.Gk_DATA_SEP;
    xmlText += getLeagueId_106510323 () + UDModule.Gk_DATA_SEP;
	xmlText += getSeasonId_106510323 () + UDModule.Gk_DATA_SEP;
	xmlText += oTeamIds + UDModule.Gk_DATA_SEP;
	xmlText += getLiveStatusId_106510323 ();
    xmlText += "</id>";	

	xmlText += "<id>";	
	xmlText += objTeamOD.kRT_Offense + UDModule.Gk_DATA_SEP;
	xmlText += objTeamOD.kTT_Away + UDModule.Gk_DATA_SEP;
	xmlText += T6_TeamOD + UDModule.Gk_DATA_SEP;
	xmlText += kSR_ListAO + UDModule.Gk_DATA_SEP;
    xmlText += getLeagueId_106510323 () + UDModule.Gk_DATA_SEP;
	xmlText += getSeasonId_106510323 () + UDModule.Gk_DATA_SEP;
	xmlText += oTeamIds + UDModule.Gk_DATA_SEP;
	xmlText += getLiveStatusId_106510323 ();
    xmlText += "</id>";

	xmlText += "<id>";	
	xmlText += objTeamOD.kRT_Defense + UDModule.Gk_DATA_SEP;
	xmlText += objTeamOD.kTT_Home + UDModule.Gk_DATA_SEP;
	xmlText += T6_TeamOD + UDModule.Gk_DATA_SEP;
	xmlText += kSR_ListHD + UDModule.Gk_DATA_SEP;
    xmlText += getLeagueId_106510323 () + UDModule.Gk_DATA_SEP;
	xmlText += getSeasonId_106510323 () + UDModule.Gk_DATA_SEP;
	xmlText += oTeamIds + UDModule.Gk_DATA_SEP;
	xmlText += getLiveStatusId_106510323 ();
    xmlText += "</id>";	

	xmlText += "<id>";	
	xmlText += objTeamOD.kRT_Defense + UDModule.Gk_DATA_SEP;
	xmlText += objTeamOD.kTT_Away + UDModule.Gk_DATA_SEP;
	xmlText += T6_TeamOD + UDModule.Gk_DATA_SEP;
	xmlText += kSR_ListAD + UDModule.Gk_DATA_SEP;
    xmlText += getLeagueId_106510323 () + UDModule.Gk_DATA_SEP;
	xmlText += getSeasonId_106510323 () + UDModule.Gk_DATA_SEP;
	xmlText += oTeamIds + UDModule.Gk_DATA_SEP;
	xmlText += getLiveStatusId_106510323 ();
    xmlText += "</id>";	

    xmlText += "</" + kCR_TeamOD_FLTR + ">";
    
	objTeamOD = null;

	return xmlText;
}

function getLeagueListXML_106510323 ()
{  	
	var arrTeamIds = getSelectedIds_TL_106510323 ();
    var oTeamIds = "0";

	var nMatchCount = 0;
	var oStartDate = "0000-00-00";
    var oEndDate = oStartDate;

	var xmlText = "<" + kCR_League_FLTR + ">";
	xmlText += "<id>";
	xmlText += T6_LeagueTable + UDModule.Gk_DATA_SEP;
	xmlText += kSR_LeagueTable + UDModule.Gk_DATA_SEP;
    xmlText += getLeagueId_106510323 () + UDModule.Gk_DATA_SEP;
	xmlText += getSeasonId_106510323 () + UDModule.Gk_DATA_SEP;
	xmlText += oTeamIds + UDModule.Gk_DATA_SEP;
	xmlText += nMatchCount + UDModule.Gk_DATA_SEP;
	xmlText += oStartDate + UDModule.Gk_DATA_SEP;
	xmlText += oEndDate;
    xmlText += "</id>";
    xmlText += "</" + kCR_League_FLTR + ">";
             
    return xmlText;
}