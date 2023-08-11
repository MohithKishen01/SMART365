/**
    @fileoverview <H5><font color="#8A8A8A">module:</font><font color="#AA6600">Team Statistics Ex</font></H5>    
*/

/**
    Creates an object of Team Statistics Ex and initializes all member variables.
	Invokes init function.
    
    @author     Mohith
    @version    1.0.0               
*/ 
function onload_106510325 ()
{
    Constructor_106510325 ();
    init_106510325 ();    
}

function init_106510325 ()
{
	UDModule.PROJ.loadDefaultTheme ();
    initData_106510325 ();
}

function initData_106510325 ()
{    
    var xmlDoc = UDModule.PROJ.processRequest (getInitParam_106510325 ());
    if (UDModule.PROJ.isValidStatus (xmlDoc))    
    {
        if (isValidStatus_T1_106510325 (xmlDoc))
        {
            UDModule.PROJ.setFunction_PM (xmlDoc);
            fillLeagues_106510325 (xmlDoc);            			   
        }
    }
}

function fillLeagues_106510325 (xmlDoc)
{
    var nodeList = xmlDoc.getElementsByTagName (kSR_Leagues);  
    UDModule.COMP.fillDropDown (nodeList, "cbLeagues", 1, 0);
}

function fillSeasonMod2_106510325 ()
{    
    var xmlDoc = UDModule.PROJ.processRequest (getSeasonParam_106510325 ());
    if (UDModule.PROJ.isValidStatus (xmlDoc))    
    {
        if (isValidStatus_T4_106510325 (xmlDoc))
            fillSeasons_106510325 (xmlDoc);
    }
}

function fillSeasons_106510325 (xmlDoc)
{
    var nodeList = xmlDoc.getElementsByTagName (kSR_Seasons);  
    UDModule.COMP.fillDropDown (nodeList, "cbSeasons", 1, 0);
}

function fillTeamMod2_106510325 ()
{    
    var xmlDoc = UDModule.PROJ.processRequest (getTeamParam_106510325 ());
    if (UDModule.PROJ.isValidStatus (xmlDoc))    
    {
        if (isValidStatus_T5_106510325 (xmlDoc))
            fillTeams_106510325 (xmlDoc);
    }
}

function fillTeams_106510325 (xmlDoc)
{
    var nodeList = xmlDoc.getElementsByTagName (kSR_Teams);  
    UDModule.COMP.fillDropDown (nodeList, "cbTeams", 1, 0);
}

function getLeagueId_106510325 ()
{
    return parseInt (UDModule.COMP.getElement ("cbLeagues").value);
}

function getSeasonId_106510325 ()
{
    return parseInt (UDModule.COMP.getElement ("cbSeasons").value);
}

function getTeamId_106510325 ()
{
    return parseInt (UDModule.COMP.getElement ("cbTeams").value);
}

function isValidData_106510325 ()
{
    var bStatus = false;
    
    if (getLeagueId_106510325 () == -1)
	{
		alert (m_arrMessages [iM_League]);
		UDModule.COMP.setFocus_DD ("cbLeagues");
	}
    else if (getSeasonId_106510325 () == 0)
	{
		alert (m_arrMessages [iM_Season]);
		UDModule.COMP.setFocus_DD ("cbSeasons");
	}
	else if (getTeamId_106510325 () == 0)
	{
		alert (m_arrMessages [iM_Team]);
		UDModule.COMP.setFocus_DD ("cbTeams");
	}
	else
	    bStatus = true;
	    
	return bStatus;
}

function clearValues_106510325 ()
{
    UDModule.COMP.replaceDynamicHtml ("tdLast5YearTeam", "");
    UDModule.COMP.replaceDynamicHtml ("tdTeam_RSSummary", "");
    UDModule.COMP.replaceDynamicHtml ("tdLast5YearLeague", "");
    UDModule.COMP.replaceDynamicHtml ("tdLeague_RSSummary", "");
    UDModule.COMP.replaceDynamicHtml ("tdNormalTable", "");
}
