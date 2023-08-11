/**
    @fileoverview <H5><font color="#8A8A8A">module:</font><font color="#AA6600">Team Statistics</font></H5>    
*/

/**
    Creates an object of Team Statistics and initializes all member variables.
	Invokes init function.
    
    @author     Mohith
    @version    1.0.0               
*/ 
function onload_106510324 ()
{
    Constructor_106510324 ();
    init_106510324 ();    
}

function init_106510324 ()
{
	UDModule.PROJ.loadDefaultTheme ();
    initData_106510324 ();
}

function initData_106510324 ()
{    
    var xmlDoc = UDModule.PROJ.processRequest (getInitParam_106510324 ());
    if (UDModule.PROJ.isValidStatus (xmlDoc))    
    {
        if (isValidStatus_T1_106510324 (xmlDoc))
        {
            UDModule.PROJ.setFunction_PM (xmlDoc);
            fillLeagues_106510324 (xmlDoc);
        }
    }
}

function fillLeagues_106510324 (xmlDoc)
{
    var nodeList = xmlDoc.getElementsByTagName (kSR_Leagues);  
    UDModule.COMP.fillDropDown (nodeList, "cbLeagues", 1, 0);
}

function fillSeasonMod2_106510324 ()
{    
    var xmlDoc = UDModule.PROJ.processRequest (getSeasonParam_106510324 ());
    if (UDModule.PROJ.isValidStatus (xmlDoc))    
    {
        if (isValidStatus_T4_106510324 (xmlDoc))
            fillSeasons_106510324 (xmlDoc);
    }
}

function fillSeasons_106510324 (xmlDoc)
{
    var nodeList = xmlDoc.getElementsByTagName (kSR_Seasons);  
    UDModule.COMP.fillDropDown (nodeList, "cbSeasons", 1, 0);
}

function fillTeamMod2_106510324 ()
{    
    var xmlDoc = UDModule.PROJ.processRequest (getTeamParam_106510324 ());
    if (UDModule.PROJ.isValidStatus (xmlDoc))    
    {
        if (isValidStatus_T5_106510324 (xmlDoc))
            fillTeams_106510324 (xmlDoc);
    }
}

function fillTeams_106510324 (xmlDoc)
{
    var nodeList = xmlDoc.getElementsByTagName (kSR_Teams);  
    UDModule.COMP.fillDropDown (nodeList, "cbTeams", 1, 0);
}

function getLeagueId_106510324 ()
{
    return parseInt (UDModule.COMP.getElement ("cbLeagues").value);
}

function getSeasonId_106510324 ()
{
    return parseInt (UDModule.COMP.getElement ("cbSeasons").value);
}

function getTeamId_106510324 ()
{
    return parseInt (UDModule.COMP.getElement ("cbTeams").value);
}

function isValidData_106510324 ()
{
    var bStatus = false;
     
    if (getLeagueId_106510324 () == -1)
	{
		alert (m_arrMessages [iM_League]);
		UDModule.COMP.setFocus_DD ("cbLeagues");
	}
    else if (getSeasonId_106510324 () == 0)
	{
		alert (m_arrMessages [iM_Season]);
		UDModule.COMP.setFocus_DD ("cbSeasons");
	}
	else if (getTeamId_106510324 () == 0)
	{
		alert (m_arrMessages [iM_Team]);
		UDModule.COMP.setFocus_DD ("cbTeams");
	}
	else
	    bStatus = true;
	    
	return bStatus;
}
